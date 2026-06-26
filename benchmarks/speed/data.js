window.BENCHMARK_DATA = {
  "lastUpdate": 1782454300197,
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
        "date": 1759720195065,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 607.25,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 607.283,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11919.52,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12498.512,
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
        "date": 1759806056936,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 593.969,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 594.002,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11277.604,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11657.683,
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
          "id": "3c85f232422435023fcef3fec879bf52eae37af9",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-07T21:49:27-05:00",
          "tree_id": "157c932fb7d284435159b850df7d64a34ce9e9d9",
          "url": "https://github.com/hyoklee/h5py/commit/3c85f232422435023fcef3fec879bf52eae37af9"
        },
        "date": 1759892271685,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 600.266,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 600.299,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 10902.44,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11070.005,
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
          "id": "3c85f232422435023fcef3fec879bf52eae37af9",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-08T02:49:27Z",
          "url": "https://github.com/hyoklee/h5py/commit/3c85f232422435023fcef3fec879bf52eae37af9"
        },
        "date": 1759892520887,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 603.615,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 603.648,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12582.888,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12527.51,
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-07T22:59:13-05:00",
          "tree_id": "a3249cf5178ff432056293e22dc51bba355fe4bc",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1759896329748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 622.956,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 622.991,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12513.313,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12650.619,
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1759978981754,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 575.012,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 575.043,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 7283.441,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7358.858,
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1760065529716,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 617.239,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 617.273,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12103.297,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12317.002,
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1760151379688,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 631.95,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 631.985,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12232.127,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12465.521,
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1760325156908,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 607.627,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 607.66,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11400.855,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11504.536,
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
          "id": "18eb1530885053569c960807ffe720654649fcaf",
          "message": "feat: support complex",
          "timestamp": "2025-10-08T03:59:13Z",
          "url": "https://github.com/hyoklee/h5py/commit/18eb1530885053569c960807ffe720654649fcaf"
        },
        "date": 1760584068200,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 602.47,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 602.504,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11693.796,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11881.429,
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
          "id": "aa9238abfc51137c91c8557ed0a9bd256098e11a",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-16T21:54:35-05:00",
          "tree_id": "544b4bd38994e8a0255b1982d28acb98cb0bda0d",
          "url": "https://github.com/hyoklee/h5py/commit/aa9238abfc51137c91c8557ed0a9bd256098e11a"
        },
        "date": 1760670155577,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 612.289,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 612.323,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11714.656,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11974.009,
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
          "id": "aa9238abfc51137c91c8557ed0a9bd256098e11a",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-17T02:54:35Z",
          "url": "https://github.com/hyoklee/h5py/commit/aa9238abfc51137c91c8557ed0a9bd256098e11a"
        },
        "date": 1760670257433,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 566.955,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 566.986,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 7148.125,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7236.089,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-20T21:56:25-05:00",
          "tree_id": "091442a93759da719b655986933d8f5a8aee1f6f",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761015855224,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 627.208,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 627.243,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11901.126,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12401.004,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761016182810,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 596.181,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 596.214,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12011.789,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12278.636,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761188863741,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 601.499,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 601.533,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11922.899,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12225.125,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761275065089,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 603.927,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 603.96,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11846.88,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12228.719,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761361671840,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 537.436,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 537.466,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 6302.036,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 8258.144,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761621008944,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 616.145,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 616.179,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12305.444,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12526.575,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761794105458,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 600.965,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 600.998,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12255.993,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12221.637,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761880406641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 611.921,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 611.955,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11931.427,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12161.367,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1761966844824,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 570.326,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 570.357,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 6363.988,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 6620.195,
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
          "id": "991339313f36db2085409d95505bd3bda35d7f08",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-10-21T02:56:25Z",
          "url": "https://github.com/hyoklee/h5py/commit/991339313f36db2085409d95505bd3bda35d7f08"
        },
        "date": 1762225935802,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 573.406,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 573.437,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 6974.215,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7148.694,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762312501935,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 623.173,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 623.207,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12609.203,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12884.615,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-04T21:13:34-06:00",
          "tree_id": "c56ed3630c09e2f5b0133641305a8b890cd4fb76",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762312779525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 618.373,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 618.407,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11953.408,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12219.543,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762399000780,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 611.847,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 611.881,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11745.973,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11973.523,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762486006181,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 605.022,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 605.055,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12116.272,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12239.392,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762571174812,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 603.74,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 603.773,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11787.325,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12055.267,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762658141415,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 633.634,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 633.669,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12393.283,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12628.853,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762744923249,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 623.135,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 623.17,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11943.704,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12268.934,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762830964714,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 616.283,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 616.317,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12125.584,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12258.178,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1762917298741,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 614.83,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 614.863,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11777.034,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12212.846,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763176159879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 626.097,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 626.131,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11674,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12033.955,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763435698664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 631.158,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 631.192,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12218.171,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12412.601,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763522055261,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 628.629,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 628.664,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11932.138,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12192.221,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763694765059,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 611.991,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 612.025,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11995.492,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12320.518,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1763780795941,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 595.066,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 595.099,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11994.558,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12178.869,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764127894047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 601.864,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 601.897,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12025.001,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12368.557,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764645645558,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 625.87,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 625.905,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12309.639,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12548.472,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764731986533,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 600.962,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 600.995,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11612.484,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11842.268,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764818486606,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 562.368,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 562.399,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 6805.325,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7062.815,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764904852841,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 596.045,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 596.078,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12511.735,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12739.451,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1764990685398,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 608.048,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 608.082,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11946.19,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12151.17,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1765078169600,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 626.88,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 626.915,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 10879.563,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11458.31,
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
          "id": "2af4337877a84a102347cb4d39dcbcb48aa85de4",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-11-05T03:13:34Z",
          "url": "https://github.com/hyoklee/h5py/commit/2af4337877a84a102347cb4d39dcbcb48aa85de4"
        },
        "date": 1765250456929,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 603.225,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 603.258,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12092.644,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12468.704,
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
          "id": "54e89888e92d7e696f31f6e8898b199ad2c9e14e",
          "message": "Guard H5T_COMPLEX references for HDF5 2.0+ compatibility\n\nH5T_COMPLEX was added in HDF5 2.0 and is not available in earlier\nversions. This was causing compilation failures in CI when building\nagainst HDF5 1.x.\n\nChanges:\n- Add version guards (HDF5_VERSION >= 2.0.0) around H5T_COMPLEX enum\n  value in api_types_hdf5.templ.pxd\n- Guard H5T_COMPLEX usage in h5t.templ.pyx typewrap function\n- Guard COMPLEX constant assignment\n- Guard TypeComplexID class definition\n\nFixes: https://github.com/hyoklee/h5py/actions/runs/20050299722\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>",
          "timestamp": "2025-12-08T21:36:58-06:00",
          "tree_id": "5fe5617f128fd0eed7823b2031c97a6cdb2c4c62",
          "url": "https://github.com/hyoklee/h5py/commit/54e89888e92d7e696f31f6e8898b199ad2c9e14e"
        },
        "date": 1765290106093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 599.862,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 599.895,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12212.804,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12562.887,
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T11:14:50-06:00",
          "tree_id": "5fe5617f128fd0eed7823b2031c97a6cdb2c4c62",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1765300850906,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 613.486,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 613.519,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11843.541,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12080.832,
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T17:14:50Z",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1765337081199,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 602.864,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 602.897,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11282.242,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11475.399,
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T17:14:50Z",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1765595892306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 604.486,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 604.519,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11630.49,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11995.351,
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T17:14:50Z",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1765855608218,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 603.925,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 603.958,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12125.086,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12354.464,
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
          "id": "b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff",
          "message": "Trigger CI workflows",
          "timestamp": "2025-12-09T17:14:50Z",
          "url": "https://github.com/hyoklee/h5py/commit/b57e1f4dc7d6aa383784f4c05005321d7a9ae6ff"
        },
        "date": 1766028197939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 581.891,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 581.923,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11795.379,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12005.521,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-17T22:05:45-06:00",
          "tree_id": "621ddba2e0cecc059b9ec9055290d9ec5369095e",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766031093609,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 631.453,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 631.487,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12636.128,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12930.624,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766114765491,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 599.09,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 599.123,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12020.173,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12433.227,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766200649225,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 631.217,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 631.251,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12417.031,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12652.073,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766460519503,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 605.316,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 605.35,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11906.239,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12393.118,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1766633351156,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 624.439,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 624.474,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12464.667,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12609.385,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767065382578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 605.277,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 605.31,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12073.492,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12343.262,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767151764482,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 619.551,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 619.585,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11694.483,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12220.171,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767239530273,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 629.66,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 629.695,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12107.757,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12507.702,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767410643386,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 611.435,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 611.469,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12193.899,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12653.715,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1767756692468,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 631.99,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 632.025,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12497.108,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12592.001,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1768015603655,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 618.106,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 618.14,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12448.836,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12450.928,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1768275014361,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 605.617,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 605.65,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11638.155,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12247.478,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1768362524826,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 605.552,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 605.585,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12308.704,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12358.236,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769053760680,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 637.502,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 637.537,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12506.581,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12531.004,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769139285659,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 591.145,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 591.178,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12219.833,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12461.624,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769225326565,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 607.347,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 607.381,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12447.949,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12503.783,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769313339784,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 607.314,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 607.348,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11849.266,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12287.5,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769485777790,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 576.245,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 576.276,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11381.311,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11853.21,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769572013620,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 614.455,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 614.489,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11966.954,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12403.396,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1769746234456,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 634.847,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 634.882,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12368,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12753.932,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770092202330,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 624.628,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 624.662,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12175.536,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12231.816,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770178403236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 594.57,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 594.602,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12290.801,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12358.119,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770264946467,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 607.834,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 607.868,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12362.581,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12547.642,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770351394262,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 537.695,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 537.725,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 6644.268,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 6520.718,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770437401648,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 605.88,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 605.914,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11780.902,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12054.387,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770784343664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 619.324,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 619.358,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11887.324,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12341.069,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1770956575772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 637.696,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 637.731,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11922.604,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12276.872,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771042312873,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 601.969,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 602.002,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 10984.419,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11257.108,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771302058011,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 620.336,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 620.37,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11794.783,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12255.026,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771474908587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 606.487,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 606.521,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11163.16,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11661.991,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771646893283,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 601.894,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 601.927,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 10839.562,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 10818.343,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771906824739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 457.39,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 457.415,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 5339.23,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 5685.746,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1771993323345,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 558.052,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 558.082,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 7273.187,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 6998.044,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772165711436,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 600.274,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 600.307,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11089.01,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11370.808,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772250949868,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 613.973,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 614.006,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12569.112,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12816.603,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772424941918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 606.52,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 606.553,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11763.203,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12030.924,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772597431865,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 605.881,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 605.914,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11883.258,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12272.644,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772684050900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 580.635,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 580.667,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 7090.608,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 6825.07,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772770270417,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 640.628,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 640.663,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12372.343,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12577.915,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1772856106952,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 617.002,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 617.036,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11859.7,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12020.561,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773029929577,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 618.289,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 618.323,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11640.23,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12319.506,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773204771911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 579.143,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 579.175,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 6925.626,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7114.071,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773288925136,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 625.299,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 625.333,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12216.069,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12560.749,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773461557057,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 646.239,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 646.274,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11855.496,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12225.449,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773721188304,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 606.832,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 606.865,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11669.949,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11896.637,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773808044459,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 605.915,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 605.948,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11974.845,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12262.612,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1773894362635,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 624.157,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 624.192,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11611.64,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 11839.343,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774065998892,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 553.74,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 553.77,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 6579.455,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 6921.722,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774412521637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 634.056,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 634.091,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 11640.269,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12084.433,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774586210041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 607.877,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 607.911,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 10969.138,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 10490.226,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774671859283,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 595.595,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 595.628,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 7256.353,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7245.618,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774846072764,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 683.716,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 683.753,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12869.112,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12615.704,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1774931951158,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 686.494,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 686.531,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13488.762,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13827.337,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775018991905,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 669.8,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 669.837,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12853.736,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12940.166,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775276320206,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 677.759,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 677.797,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13439.381,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13622.004,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775364006608,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 679.258,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 679.295,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13583.348,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13985.787,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775536558116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 687.825,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 687.863,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13662.465,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14184.49,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775623163264,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 681.595,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 681.633,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13652.62,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13842.356,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775712607428,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 695.009,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 695.047,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13497.945,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13888.957,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1775881428242,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 674.136,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 674.173,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13738.153,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14003.653,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1776142081209,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 685.607,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 685.645,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13236.608,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13522.127,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1776747056591,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 610.452,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 610.485,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 7411.12,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7324.336,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1776833319418,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 692.772,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 692.81,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13611.654,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13868.258,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777267530082,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 642.402,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 642.437,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 10623.729,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13662.323,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777440515099,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 682.379,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 682.417,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12423.353,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12595.646,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777527135568,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 697.014,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 697.052,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13505.902,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14004.744,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777614240820,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 687.312,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 687.35,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13775.645,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14005.616,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777698073499,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 672.793,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 672.83,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13163.951,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13686.934,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1777786345372,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 595.031,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 595.064,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 7036.751,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7050.71,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778132015371,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 671.879,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 671.916,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13716.376,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14218.36,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778216175771,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 701.859,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 701.898,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13838.665,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14196.73,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778304230848,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 703.212,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 703.251,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13690.476,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13907.015,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778651386100,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 699.33,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 699.368,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13855.262,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14226.451,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1778824592190,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 672.462,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 672.499,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13751.724,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13881.577,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1779170906493,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 687.715,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 687.753,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13942.345,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14484.134,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1779257291176,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 683.228,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 683.266,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13389.149,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13851.042,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1779514911196,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 692.138,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 692.176,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13259.289,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13678.273,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1779862855684,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 661.71,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 661.747,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13762.9,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13965.582,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780035250127,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 695.349,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 695.388,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13234.028,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13539.472,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780120157330,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 703.901,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 703.94,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13906.585,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14440.435,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780296942751,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 701.642,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 701.681,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13000.075,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13147.652,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780382592212,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 594.949,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 594.982,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 7438.518,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 7450.455,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780469627409,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 681.637,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 681.675,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13503.703,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13784.345,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780555459203,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 668.71,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 668.747,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12782.41,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13487.705,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780640582273,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 682.421,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 682.459,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13921.127,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14109.66,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780725364254,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 682.921,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 682.959,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13457.192,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13760.963,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1780985432569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 675.706,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 675.743,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 12903.475,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 12976.648,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781072679148,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 677.317,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 677.354,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13442.773,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13769.233,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781246528341,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 694.179,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 694.218,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13756.782,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13649.907,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781331477606,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 679.914,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 679.952,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13483.372,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13832.932,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781419218699,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 654.309,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 654.345,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13392.388,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13426.688,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781594814907,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 674.475,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 674.512,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13757.882,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13969.153,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781680184233,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 690.916,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 690.954,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13997.732,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13884.012,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781765600228,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 679.476,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 679.514,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 14021.914,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14175.993,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1781936510245,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 688.169,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 688.207,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13607.518,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13631.208,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1782194882460,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 702.757,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 702.796,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 14374.477,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 14616.236,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1782281295078,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 696.114,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 696.152,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13722.261,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13912.39,
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
          "id": "7fd5e846b467497869bc98e30a091738c12db1fb",
          "message": "Merge branch 'h5py:master' into master",
          "timestamp": "2025-12-18T04:05:45Z",
          "url": "https://github.com/hyoklee/h5py/commit/7fd5e846b467497869bc98e30a091738c12db1fb"
        },
        "date": 1782454299486,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Uncompressed Data Saving Speed",
            "value": 673.219,
            "unit": "MB/s"
          },
          {
            "name": "Effective Write Speed",
            "value": 673.257,
            "unit": "MB/s"
          },
          {
            "name": "Sequential Read Speed (3x64 slices)",
            "value": 13139.153,
            "unit": "MB/s"
          },
          {
            "name": "Threaded Read Speed (4-threaded 3x64 slices)",
            "value": 13775.265,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}