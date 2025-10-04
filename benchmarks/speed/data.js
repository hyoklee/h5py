window.BENCHMARK_DATA = {
  "lastUpdate": 1759546269957,
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
        "date": 1758251870439,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 634.855,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 634.89,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12422.581,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12704.986,
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
        "date": 1758337299170,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 601.258,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 601.291,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 9566.13,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 10402.845,
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
        "date": 1758424296945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 629.845,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 629.88,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12116.123,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12068.442,
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
        "date": 1758596479322,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 600.005,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 600.038,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11930.186,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12236.912,
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
        "date": 1758682936973,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 599.028,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 599.061,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12124.281,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12033.083,
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-23T23:27:17-05:00",
          "tree_id": "fef203e13732c7374e83365c455555aaedc17577",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1758688475505,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 624.3,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 624.335,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12217.082,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12655.429,
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1758769557384,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 545.936,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 545.966,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 6886.774,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7055.214,
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1758855846652,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 611.624,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 611.658,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12152.429,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12035.578,
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1758941865103,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 618.522,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 618.556,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11886.099,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12550.631,
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759029120381,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 631.267,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 631.302,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12150.205,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12316.769,
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759201225841,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 621.232,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 621.266,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12514.822,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12590.68,
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759288399109,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 623.488,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 623.523,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12228.678,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12476.677,
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759460453524,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 588.248,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 588.28,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12297.068,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12451.908,
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
          "id": "d690897d98971237272ff4f2e8b65eee01b21fb3",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-09-24T04:27:17Z",
          "url": "https://github.com/hyoklee/h5py/commit/d690897d98971237272ff4f2e8b65eee01b21fb3"
        },
        "date": 1759546269604,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 630.224,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 630.258,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12171.992,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12290.322,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}