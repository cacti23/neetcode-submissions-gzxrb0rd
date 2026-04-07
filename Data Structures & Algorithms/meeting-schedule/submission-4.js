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
        // sorting 
        // tc -> O(nlogn)
        // sc -> O(1)
        const len = intervals.length;
        if(len === 0 || len === 1) return true;

        const sortedIntervals = intervals.slice().sort((a, b) => a.start - b.start);

        // iterate through for loop 
        for(let i = 1; i < len; i++) {
            const intervalA = sortedIntervals[i - 1];
            const intervalB = sortedIntervals[i];

            // since they are sorted we can check only one conditin 
            if(intervalB.start < intervalA.end) {
                return false;
            }
        }

        return true;


        // // brute force
        // // tc -> O(n^2)
        // // sc -> O(1)
        // const len = intervals.length;

        // for(let i = 0; i < len; i++) {
        //     const intervalA = intervals[i];

        //     for(let j = i + 1; j < len; j++) {
        //         const intervalB = intervals[j];

        //         if(intervalA.start < intervalB.end && intervalB.start < intervalA.end) {
        //             return false;
        //         }
        //     }
        // }

        // return true;
    }
}
