class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const parent = Array.from({length: n}, (_, i) => i);
        const rank = Array(n).fill(0);


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

            return true;
        }

        for(const [u, v] of edges) {
            union(u, v);
        }

        const distinctParents = new Set<number>();

        for(let i = 0; i < n; i++) {
            const p = find(i);
            distinctParents.add(p);
        }

        return distinctParents.size;
    }
}
