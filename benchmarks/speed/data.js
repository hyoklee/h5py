window.BENCHMARK_DATA = {
  "lastUpdate": 1758164473073,
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
      },
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
          "id": "a3de2f75c5344a0f545647b73545315361da0ae7",
          "message": "bulid: allow calude",
          "timestamp": "2025-09-15T12:24:01-05:00",
          "tree_id": "4bd6a207d03bcccbdd6c9b6edb6d42d18cfa5466",
          "url": "https://github.com/hyoklee/h5py/commit/a3de2f75c5344a0f545647b73545315361da0ae7"
        },
        "date": 1757957515504,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 625.409,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 625.443,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11889.58,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11914.42,
            "unit": "MB/s"
          }
        ]
      },
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
          "id": "74465107ba777d452991d3df5eab11cba1656595",
          "message": "feat: add HDF5 commit hash tracking to benchmark workflow\n\n- Add HDF5 commit hash detection and storage\n- Implement conditional execution based on HDF5 changes\n- Skip benchmark runs when HDF5 develop hasn't changed on scheduled runs\n- Save HDF5 hash to gh-pages branch for future comparisons\n- Add informative skip messages when no changes detected\n\nFollows the same pattern as h5bench build-and-test.yml workflow\nto optimize CI resource usage while ensuring comprehensive testing.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T13:40:39-05:00",
          "tree_id": "606bf98586c6c690875f343cc1505f2225e8ce3d",
          "url": "https://github.com/hyoklee/h5py/commit/74465107ba777d452991d3df5eab11cba1656595"
        },
        "date": 1757962039813,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 626.427,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 626.462,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11944.987,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12257.362,
            "unit": "MB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "74465107ba777d452991d3df5eab11cba1656595",
          "message": "feat: add HDF5 commit hash tracking to benchmark workflow\n\n- Add HDF5 commit hash detection and storage\n- Implement conditional execution based on HDF5 changes\n- Skip benchmark runs when HDF5 develop hasn't changed on scheduled runs\n- Save HDF5 hash to gh-pages branch for future comparisons\n- Add informative skip messages when no changes detected\n\nFollows the same pattern as h5bench build-and-test.yml workflow\nto optimize CI resource usage while ensuring comprehensive testing.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-15T18:40:39Z",
          "url": "https://github.com/hyoklee/h5py/commit/74465107ba777d452991d3df5eab11cba1656595"
        },
        "date": 1757991634018,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 629.39,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 629.424,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12080.422,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12369.478,
            "unit": "MB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58970c084c242feda8a317420b0f8ba9d9b94599",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-15T22:51:37-05:00",
          "tree_id": "9a1bc414e685dd295bfde139b76f2872c2d4d301",
          "url": "https://github.com/hyoklee/h5py/commit/58970c084c242feda8a317420b0f8ba9d9b94599"
        },
        "date": 1757995052951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 580.743,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 580.775,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12102.969,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12238.527,
            "unit": "MB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "58970c084c242feda8a317420b0f8ba9d9b94599",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-16T03:51:37Z",
          "url": "https://github.com/hyoklee/h5py/commit/58970c084c242feda8a317420b0f8ba9d9b94599"
        },
        "date": 1758077923814,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 622.515,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 622.549,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12282.543,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12426.904,
            "unit": "MB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "58970c084c242feda8a317420b0f8ba9d9b94599",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-16T03:51:37Z",
          "url": "https://github.com/hyoklee/h5py/commit/58970c084c242feda8a317420b0f8ba9d9b94599"
        },
        "date": 1758164472256,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 627.431,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 627.466,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12424.399,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12418.782,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}