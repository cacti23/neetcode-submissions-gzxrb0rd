class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        const adj = new Map<string, Set<string>>();
        const indegree = new Map<string, number>();

        for (const word of words) {
        for (const ch of word) {
            if (!adj.has(ch)) {
            adj.set(ch, new Set());
            indegree.set(ch, 0);
            }
        }
        }

        for (let i = 0; i < words.length - 1; i++) {
        const [w1, w2] = [words[i], words[i + 1]];
        let j = 0;

        while (j < w1.length && j < w2.length && w1[j] === w2[j]) j++; // find first differing position

        if (j === w1.length || j === w2.length) {
            if (w1.length > w2.length) return ""; // edge case: w1 is a longer prefix of w2 — invalid
            continue; // w1 is a prefix of w2 (or equal) — no new constraint, move on
        }

        const [a, b] = [w1[j], w2[j]];
        if (!adj.get(a)!.has(b)) {
            adj.get(a)!.add(b);
            indegree.set(b, indegree.get(b)! + 1);
        }
        }

        const queue: string[] = [...indegree.keys()].filter(ch => indegree.get(ch) === 0);
        let head = 0; // head-pointer BFS, never .shift()
        let result = "";

        while (head < queue.length) {
        const ch = queue[head++];
        result += ch;

        for (const next of adj.get(ch)!) {
            indegree.set(next, indegree.get(next)! - 1);
            if (indegree.get(next) === 0) queue.push(next);
        }
        }

        return result.length === indegree.size ? result : "";
    }
}
