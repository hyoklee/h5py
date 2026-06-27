window.BENCHMARK_DATA = {
  "lastUpdate": 1782539709830,
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
        "date": 1757957514092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.867,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.335,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.326,
            "unit": "seconds"
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
        "date": 1757962038335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.856,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.315,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.205,
            "unit": "seconds"
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
        "date": 1757991632539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.824,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.266,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.167,
            "unit": "seconds"
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
        "date": 1757995051702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.396,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.258,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.211,
            "unit": "seconds"
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
        "date": 1758077922298,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.899,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.196,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.147,
            "unit": "seconds"
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
        "date": 1758164469626,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.845,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.148,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.15,
            "unit": "seconds"
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
        "date": 1758251867506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.765,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.149,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.057,
            "unit": "seconds"
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
        "date": 1758337296501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.143,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 5.388,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.954,
            "unit": "seconds"
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
        "date": 1758424294957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.819,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.254,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.271,
            "unit": "seconds"
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
        "date": 1758596476647,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.158,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.32,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.212,
            "unit": "seconds"
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
        "date": 1758682934217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.17,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.251,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.283,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-23T23:27:17-05:00",
          "tree_id": "fef203e13732c7374e83365c455555aaedc17577",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1758688472906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.88,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.219,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.073,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1758769554701,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.867,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.484,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.305,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1758855844103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.022,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.241,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.282,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1758941863623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.944,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.336,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.107,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759029118639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.804,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.242,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.185,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759201224299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.914,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.118,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.093,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759288397509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.889,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.215,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.131,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759460450546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.301,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.191,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.139,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759546267871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.815,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.234,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.194,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759720192272,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.073,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.324,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.124,
            "unit": "seconds"
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759806055110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.231,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.57,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.421,
            "unit": "seconds"
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
          "id": "3c85f232422435023fcef3fec879bf52eae37af9",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-07T21:49:27-05:00",
          "tree_id": "157c932fb7d284435159b850df7d64a34ce9e9d9",
          "url": "https://github.com/hyoklee/h5py/commit/3c85f232422435023fcef3fec879bf52eae37af9"
        },
        "date": 1759892270123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.155,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.727,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.656,
            "unit": "seconds"
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
          "id": "3c85f232422435023fcef3fec879bf52eae37af9",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-08T02:49:27Z",
          "url": "https://github.com/hyoklee/h5py/commit/3c85f232422435023fcef3fec879bf52eae37af9"
        },
        "date": 1759892518352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.115,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.096,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.114,
            "unit": "seconds"
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-07T22:59:13-05:00",
          "tree_id": "a3249cf5178ff432056293e22dc51bba355fe4bc",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1759896327629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.894,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.119,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.074,
            "unit": "seconds"
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1759978978911,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.469,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.076,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.004,
            "unit": "seconds"
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1760065527025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.958,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.258,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.184,
            "unit": "seconds"
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1760151377192,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.796,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.213,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.135,
            "unit": "seconds"
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1760325155179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.068,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.521,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.48,
            "unit": "seconds"
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1760584065672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.129,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.407,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.338,
            "unit": "seconds"
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
          "id": "aa9238abfc51137c91c8557ed0a9bd256098e11a",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-16T21:54:35-05:00",
          "tree_id": "544b4bd38994e8a0255b1982d28acb98cb0bda0d",
          "url": "https://github.com/hyoklee/h5py/commit/aa9238abfc51137c91c8557ed0a9bd256098e11a"
        },
        "date": 1760670153298,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.015,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.4,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.304,
            "unit": "seconds"
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
          "id": "aa9238abfc51137c91c8557ed0a9bd256098e11a",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-17T02:54:35Z",
          "url": "https://github.com/hyoklee/h5py/commit/aa9238abfc51137c91c8557ed0a9bd256098e11a"
        },
        "date": 1760670254604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.576,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.21,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.123,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-20T21:56:25-05:00",
          "tree_id": "091442a93759da719b655986933d8f5a8aee1f6f",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761015853045,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.848,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.331,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.156,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761016180286,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.204,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.291,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.198,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761188861650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.14,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.323,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.216,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761275063023,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.112,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.35,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.215,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761361670164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.992,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 8.178,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 6.241,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761621006249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.971,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.188,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.114,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761794103955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.147,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.205,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.217,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761880404605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.019,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.32,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.238,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761966841992,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.531,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 8.099,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.785,
            "unit": "seconds"
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1762225933083,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.49,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.39,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.21,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762312499452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.892,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.087,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-04T21:13:34-06:00",
          "tree_id": "c56ed3630c09e2f5b0133641305a8b890cd4fb76",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762312778294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.946,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.312,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.218,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762398999097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.02,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.388,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.304,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762486004669,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.099,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.254,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.211,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762571172238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.114,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.372,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.275,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762658139554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.778,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.159,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.081,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762744921402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.893,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.315,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.201,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762830962725,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.969,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.25,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.205,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762917296857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.986,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.376,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.22,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763176158434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.86,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.415,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.283,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763435697343,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.805,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.218,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.152,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763522052770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.832,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.319,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.227,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763694763244,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.018,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.297,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.183,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763780794605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.218,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.297,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.232,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764127891120,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.136,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.286,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.167,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764645643768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.862,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.187,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.107,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764731984028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.147,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.438,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.352,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764818484058,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.637,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.573,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.297,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764904850200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.206,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.119,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.046,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764990683524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.064,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.314,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.242,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1765078167906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.851,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.737,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.498,
            "unit": "seconds"
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1765250455070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.12,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.262,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.134,
            "unit": "seconds"
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
          "id": "54e89888e92d7e696f31f6e8898b199ad2c9e14e",
          "message": "Guard H5T_COMPLEX references for HDF5 2.0+ compatibility\n\nH5T_COMPLEX was added in HDF5 2.0 and is not available in earlier\nversions. This was causing compilation failures in CI when building\nagainst HDF5 1.x.\n\nChanges:\n- Add version guards (HDF5_VERSION >= 2.0.0) around H5T_COMPLEX enum\n  value in api_types_hdf5.templ.pxd\n- Guard H5T_COMPLEX usage in h5t.templ.pyx typewrap function\n- Guard COMPLEX constant assignment\n- Guard TypeComplexID class definition\n\nFixes: https://github.com/hyoklee/h5py/actions/runs/20050299722\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-08T21:36:58-06:00",
          "tree_id": "5fe5617f128fd0eed7823b2031c97a6cdb2c4c62",
          "url": "https://github.com/hyoklee/h5py/commit/54e89888e92d7e696f31f6e8898b199ad2c9e14e"
        },
        "date": 1765290103961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.16,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.22,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.103,
            "unit": "seconds"
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T11:14:50-06:00",
          "tree_id": "5fe5617f128fd0eed7823b2031c97a6cdb2c4c62",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1765300849717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.001,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.352,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.266,
            "unit": "seconds"
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T17:14:50Z",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1765337079526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.124,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.568,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.491,
            "unit": "seconds"
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T17:14:50Z",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1765595890573,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.105,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.431,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.297,
            "unit": "seconds"
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T17:14:50Z",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1765855605606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.112,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.251,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.172,
            "unit": "seconds"
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T17:14:50Z",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1766028196309,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.381,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.369,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.293,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-17T22:05:45-06:00",
          "tree_id": "621ddba2e0cecc059b9ec9055290d9ec5369095e",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766031092177,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.802,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.079,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.986,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766114762332,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.169,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.288,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.145,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766200646536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.804,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.151,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.074,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766460516862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.095,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.329,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.159,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766633348576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.878,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.135,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.087,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767065381139,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.096,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.269,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.176,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767151761826,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.932,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.407,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.218,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767239528373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.821,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.257,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.121,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767410641396,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.024,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.227,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.073,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767756691025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.796,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.124,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.093,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1768015602057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.949,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.14,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.139,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1768275012932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.092,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.429,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.208,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1768362523367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.093,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.187,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.17,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769053759277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.737,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.121,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.113,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769139283687,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.266,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.218,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.136,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769225325107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.072,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.14,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.122,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769313337954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.072,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.35,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.194,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769485775277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.453,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.528,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.348,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769572012090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.99,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.307,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.155,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769746232391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.765,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.167,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.041,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770092200519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.876,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.233,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.214,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770178400032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.224,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.193,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.171,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770264944633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.066,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.169,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.108,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770351391369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.988,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.757,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.904,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770437399592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.089,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.375,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.276,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770784341931,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.935,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.336,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.176,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770956574249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.735,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.323,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.198,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771042311397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.135,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.692,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.578,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771302054969,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.924,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.37,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.206,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771474906609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.082,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.617,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.419,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771646891542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.136,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.755,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.764,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771906821747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 9.39,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 9.653,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 9.065,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771993321537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.696,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.086,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.365,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772165708332,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.155,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.648,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.533,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772250947262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.995,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.1,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.021,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772424940091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.081,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.381,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.284,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772597430342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.089,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.337,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.2,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772684048918,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.397,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.269,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.552,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772770268808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.704,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.166,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.098,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772856105132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.961,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.346,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.288,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773029926953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.947,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.428,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.184,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773204768966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.416,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.442,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.245,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773288923308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.869,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.219,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.103,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773461554342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.646,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.347,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.216,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773721186853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.078,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.416,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.332,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773808042908,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.088,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.304,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.203,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773894360877,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.881,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.439,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.353,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774065996902,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.756,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.833,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.446,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774412520076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.774,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.428,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.265,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774586207378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.066,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.699,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.913,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774671857411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.211,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.103,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.113,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774846070510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.282,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.005,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.085,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774931949404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.256,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.821,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.727,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775018989282,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.412,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.01,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.983,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775276318821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.337,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.835,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.784,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775364003600,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.323,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.794,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.685,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775536555158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.244,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.772,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.634,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775623161759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.301,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.775,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.723,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775712605831,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.18,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.818,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.711,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775881425389,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.371,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.752,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.68,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1776142079708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.264,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.894,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.812,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1776747054343,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.036,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 6.954,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.037,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1776833317012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.2,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.786,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.716,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777267527606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.686,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.851,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.772,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777440512668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.294,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.149,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 4.092,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777527132401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.162,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.816,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.68,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777614238369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.249,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.741,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.68,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777698070040,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.384,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.915,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.766,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777786342099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.218,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 7.324,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 7.31,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778132013335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.392,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.758,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.625,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778216173720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.119,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.724,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.63,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778304228043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.108,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.765,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.706,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778651383401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.142,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.72,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.623,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778824588622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.387,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.748,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.713,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1779170904346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.245,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.697,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.558,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1779257288892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.286,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.849,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.721,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1779514908096,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.205,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.887,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.768,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1779862851780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.491,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.745,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.69,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780035246931,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.177,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.894,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.807,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780120154455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.102,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.706,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.569,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780296940055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.121,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.965,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.92,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780382589553,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 7.219,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 6.929,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 6.918,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780469624148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.301,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.817,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.739,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780555456565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.423,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 4.032,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.821,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780640579746,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.294,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.702,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.653,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780725361827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.289,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.83,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.745,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780985429602,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.356,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.994,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.972,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781072676628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.341,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.834,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.743,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781246525838,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.187,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.746,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.776,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781331473598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.317,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.822,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.726,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781419215375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.564,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.848,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.839,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781594812488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.368,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.746,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.69,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781680182215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.216,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.682,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.712,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781765596373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.321,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.676,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.636,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781936508331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.241,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.788,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.781,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1782194879758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.112,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.585,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.526,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1782281291488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.17,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.756,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.705,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1782454296212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.38,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.923,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.741,
            "unit": "seconds"
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1782539708217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Write Time",
            "value": 6.366,
            "unit": "seconds"
          },
          {
            "name": "Sequential Read Time (3x64 slices)",
            "value": 3.699,
            "unit": "seconds"
          },
          {
            "name": "Threaded Read Time (4-threaded 3x64 slices)",
            "value": 3.602,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}