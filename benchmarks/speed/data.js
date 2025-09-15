window.BENCHMARK_DATA = {
  "lastUpdate": 1757954143709,
  "repoUrl": "https://github.com/hyoklee/h5py",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "4a0a77e62a7a161bc3945dbaffc469e0ef4cb2ff",
          "message": "Fix JSON format for github-action-benchmark\n\nChange output format from nested object with benchmarks array to\ndirect array of benchmark objects as expected by the action\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T11:29:26-05:00",
          "tree_id": "d007701e015063f540d39afbc7e4b6b8387ce3e0",
          "url": "https://github.com/hyoklee/h5py/commit/4a0a77e62a7a161bc3945dbaffc469e0ef4cb2ff"
        },
        "date": 1757954143288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 606.812,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 606.845,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11807.346,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11889.596,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}