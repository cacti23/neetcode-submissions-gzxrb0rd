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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // brute force
        // tc -> O(n^2)
        // sc -> O(1)
        const len = intervals.length;

        for(let i = 0; i < len; i++) {
            const intervalA = intervals[i];

            for(let j = i + 1; j < len; j++) {
                const intervalB = intervals[j];

                if(intervalA.start < intervalB.end && intervalB.start < intervalA.end) {
                    return false;
                }
            }
        }

        return true;
    }
}
