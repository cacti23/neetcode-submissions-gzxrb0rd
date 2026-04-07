class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // tc -> O(n) -> total number of characters across all strings 
    encode(strs) {
        let parts = [];
        for(const s of strs) {
            parts.push(s.length + '#' + s);
        }

        return parts.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') {
                j++;
            }

            const length = Number(str.slice(i, j));

            i = j + 1;
            j = i + length;
            res.push(str.slice(i, j));
            i = j;
        }

        return res;
    }
}
