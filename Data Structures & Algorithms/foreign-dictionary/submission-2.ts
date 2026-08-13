// ⏱️ TC:
// Step 1: registering unique characters across all words → O(C), C = total characters across all words
// Step 2: comparing each adjacent word pair via a while-loop pointer, stopping at the first differing position → O(min word length) per pair, summed to O(C) across all pairs
// Step 3: Kahn's BFS processes each character once, scanning its adjacency set → O(V + E), V ≤ 26, E ≤ 26²
// ⇒ Final TC = O(C + V + E), effectively O(C) since C dominates for realistic inputs
// 📦 SC: graph, indegree maps → O(V + E); queue, result → O(V)
// ⇒ Final SC = O(V + E)
class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        const graph = new Map<string, Set<string>>();
        const indegree = new Map<string, number>();

        // setup graph and indegree
        for(const word of words) {
            for(const ch of word) {
                if(!graph.has(ch)) {
                    graph.set(ch, new Set());
                    indegree.set(ch, 0);
                }
            }
        }

        for(let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];

            let j = 0;

            while(j < w1.length && j < w2.length && w1[j] === w2[j]) j++;

            if(j === w1.length && j === w2.length) {
                continue;
            } else if(j === w1.length) {
                continue; // w1 is a prefix of w2
            } else if(j === w2.length) {
                return ''; // w2 is a prefix of w1 -> invalid -> w1 -> abc w2 -> ab
            } else {
                const from = w1[j];
                const to = w2[j];

                // Avoid duplicate edge
                if(!graph.get(from).has(to)) {
                    graph.get(from)!.add(to);
                    indegree.set(to, indegree.get(to)! + 1);
                }
            }
        }

        // 3. Start BFS with characters having indegree 0
        const queue: string[] = [];

        for (const [ch, degree] of indegree) {
            if (degree === 0) {
                queue.push(ch);
            }
        }

        // 4. Kahn's BFS
        let result = [];
        let front = 0;

        while (front < queue.length) {
            const node = queue[front++];
            result.push(node);

            for (const next of graph.get(node)!) {
                indegree.set(next, indegree.get(next)! - 1);

                if (indegree.get(next) === 0) {
                    queue.push(next);
                }
            }
        }

        // 5. Cycle check
        return result.length === indegree.size ? result.join('') : "";
    }
}
