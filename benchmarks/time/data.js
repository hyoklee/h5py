window.BENCHMARK_DATA = {
  "lastUpdate": 1757954142450,
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
        "date": 1757954141606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.078,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.365,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.335,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}