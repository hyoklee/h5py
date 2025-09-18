window.BENCHMARK_DATA = {
  "lastUpdate": 1758164470960,
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
      }
    ]
  }
}