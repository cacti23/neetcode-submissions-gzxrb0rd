// 1️⃣ UNION-FIND (path compression + union by rank)
//
// ⏱️ TC:
// Step 1: We process each edge exactly once
//         → E edges (E = edges.length) → O(E)
//
// Step 2: Each union() does 2 find() operations
//         Path compression + union by rank
//         → find() = O(α(n)) amortized
//
// Step 3:
//         E edges × O(α(n))
//         → O(E · α(n))
//
// ⇒ Final TC = O(E · α(n))
//    α(n) is effectively constant
//    ⇒ commonly written as O(E) or O(n + E)
//
// 📦 SC:
// parent[] + rank[] → O(n)
//
// ⇒ Final SC = O(n)
class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const parent = Array.from({length: n}, (_, i) => i);
        const rank = Array(n).fill(0);
        let components = n;


        function find(x: number): number {
            let root = x;

            while(parent[root] !== root) {
                root = parent[root];
            }

            while(parent[x] !== root) {
                const next = parent[x];
                parent[x] = root;
                x = root;
            }

            return root;
        }

        function union(x: number, y: number): boolean {
            const px = find(x);
            const py = find(y);

            if(px === py) return false;

            if(rank[px] < rank[py]) parent[px] = py;
            else if(rank[px] > rank[py]) parent[py] = px;
            else {
                parent[px] = py;
                rank[py]++;
            }

            components--;
            return true;
        }

        for(const [u, v] of edges) {
            union(u, v);
        }

        return components;
    }
}
