window.BENCHMARK_DATA = {
  "lastUpdate": 1764904851600,
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
      }
    ]
  }
}