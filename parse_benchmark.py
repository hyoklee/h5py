#!/usr/bin/env python3
"""
Parse h5py benchmark results and convert to JSON format for github-action-benchmark.
"""
import re
import json
import sys
from pathlib import Path

def parse_benchmark_results(input_file='test-results.txt'):
    """Parse the benchmark results from test-results.txt and return structured data."""

    if not Path(input_file).exists():
        print(f"Error: {input_file} not found")
        sys.exit(1)

    with open(input_file, 'r') as f:
        content = f.read()

    # Patterns to match the different benchmark outputs
    compression_pattern = r'INFO:__main__:Compression: [\d.]+ time ([\d.]+)s uncompressed data saving speed ([\d.]+) MB/s effective write speed\s+([\d.]+) MB/s'
    sequential_pattern = r'INFO:__main__:Time for reading (\d+)x(\d+) slices: ([\d.]+)s fps: [\d.]+ Uncompressed data read speed ([\d.]+) MB/s'
    threaded_pattern = r'INFO:__main__:Time for (\d+)-threaded reading (\d+)x(\d+) slices: ([\d.]+)s fps: [\d.]+ Uncompressed data read speed ([\d.]+) MB/s'

    benchmarks = []

    # Parse compression benchmark
    compression_match = re.search(compression_pattern, content)
    if compression_match:
        write_time = float(compression_match.group(1))
        uncompressed_speed = float(compression_match.group(2))
        effective_speed = float(compression_match.group(3))

        benchmarks.extend([
            {
                "name": "Write Time",
                "unit": "seconds",
                "value": write_time
            },
            {
                "name": "Uncompressed Data Saving Speed",
                "unit": "MB/s",
                "value": uncompressed_speed
            },
            {
                "name": "Effective Write Speed",
                "unit": "MB/s",
                "value": effective_speed
            }
        ])

    # Parse sequential read benchmark
    sequential_match = re.search(sequential_pattern, content)
    if sequential_match:
        ndim = int(sequential_match.group(1))
        nb_read = int(sequential_match.group(2))
        read_time = float(sequential_match.group(3))
        read_speed = float(sequential_match.group(4))

        benchmarks.extend([
            {
                "name": f"Sequential Read Time ({ndim}x{nb_read} slices)",
                "unit": "seconds",
                "value": read_time
            },
            {
                "name": f"Sequential Read Speed ({ndim}x{nb_read} slices)",
                "unit": "MB/s",
                "value": read_speed
            }
        ])

    # Parse threaded read benchmark
    threaded_match = re.search(threaded_pattern, content)
    if threaded_match:
        nthreads = int(threaded_match.group(1))
        ndim = int(threaded_match.group(2))
        nb_read = int(threaded_match.group(3))
        read_time = float(threaded_match.group(4))
        read_speed = float(threaded_match.group(5))

        benchmarks.extend([
            {
                "name": f"Threaded Read Time ({nthreads}-threaded {ndim}x{nb_read} slices)",
                "unit": "seconds",
                "value": read_time
            },
            {
                "name": f"Threaded Read Speed ({nthreads}-threaded {ndim}x{nb_read} slices)",
                "unit": "MB/s",
                "value": read_speed
            }
        ])

    if not benchmarks:
        print("Error: No benchmark data found in the input file")
        sys.exit(1)

    return benchmarks

def create_benchmark_json(benchmarks, output_file='benchmark-data.json'):
    """Create the JSON file in the format expected by github-action-benchmark."""

    # Separate time-based (smaller is better) and speed-based (bigger is better) metrics
    time_benchmarks = []
    speed_benchmarks = []

    for benchmark in benchmarks:
        if 'Time' in benchmark['name']:
            time_benchmarks.append(benchmark)
        elif 'Speed' in benchmark['name']:
            speed_benchmarks.append(benchmark)

    # Create separate JSON files for each type of benchmark
    if time_benchmarks:
        time_data = {
            "schemaVersion": 1,
            "tool": "customSmallerIsBetter",
            "benchmarks": time_benchmarks
        }
        with open('benchmark-time.json', 'w') as f:
            json.dump(time_data, f, indent=2)

    if speed_benchmarks:
        speed_data = {
            "schemaVersion": 1,
            "tool": "customBiggerIsBetter",
            "benchmarks": speed_benchmarks
        }
        with open('benchmark-speed.json', 'w') as f:
            json.dump(speed_data, f, indent=2)

    # Also create a combined file (using smaller is better as default)
    combined_data = {
        "schemaVersion": 1,
        "tool": "customSmallerIsBetter",
        "benchmarks": benchmarks
    }

    with open(output_file, 'w') as f:
        json.dump(combined_data, f, indent=2)

    print(f"Created benchmark JSON files:")
    if time_benchmarks:
        print(f"- benchmark-time.json ({len(time_benchmarks)} time-based benchmarks)")
    if speed_benchmarks:
        print(f"- benchmark-speed.json ({len(speed_benchmarks)} speed-based benchmarks)")
    print(f"- {output_file} ({len(benchmarks)} total benchmarks)")

def main():
    """Main function to parse benchmark results and create JSON output."""
    benchmarks = parse_benchmark_results()
    create_benchmark_json(benchmarks)

    print(f"Successfully parsed {len(benchmarks)} benchmark results")
    for benchmark in benchmarks:
        print(f"  - {benchmark['name']}: {benchmark['value']} {benchmark['unit']}")

if __name__ == "__main__":
    main()