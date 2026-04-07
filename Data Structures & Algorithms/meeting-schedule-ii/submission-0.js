/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        // sweep line algorithm 
        // The Analogy: Parking Lot
        // Imagine a parking lot:

        // Meeting START = Car enters (+1 space used)
        // Meeting END = Car leaves (-1 space freed)
        // Find max cars at any time = Min spaces needed
        const len = intervals.length;
        if(len <= 1) return len;
        const mp = new Map();

        // populate the map 
        for(const interval of intervals) {
            const start = interval.start;
            const end = interval.end;
            mp.set(start, (mp.get(start) ?? 0) + 1);
            mp.set(end, (mp.get(end) ?? 0) - 1);
        }

        const sortedKeys = Array.from(mp.keys()).sort((a, b) => a - b);


        let maxCount = 0, currCount = 0;

        for(const key of sortedKeys) {
            currCount += mp.get(key);
            maxCount = Math.max(maxCount, currCount);
        }

        return maxCount;
    }
}
