/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
const sumOfDistancesInTree = function (N, edges) {
  const mp = Array.from({ length: N }, () => []);

  edges.forEach((e) => {
    const [m, n] = e;

    mp[m].push(n);
    mp[n].push(m);
  });

  const count = Array(N).fill(1);
  const dist = Array(N).fill(0);

  (function dfs1(u, p) {
    mp[u].forEach((v) => {
      if (v !== p) {
        dfs1(v, u);
        count[u] += count[v];
        dist[u] += dist[v] + count[v];
      }
    });
  })(0, -1);
  (function dfs2(u, p) {
    mp[u].forEach((v) => {
      if (v !== p) {
        dist[v] = dist[u] - count[v] + (N - count[v]);
        dfs2(v, u);
      }
    });
  })(0, -1);

  return dist;
};
