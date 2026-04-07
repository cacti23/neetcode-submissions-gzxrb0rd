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
        // two pointer algorithm 
        const len = intervals.length;

        const start = intervals.map((i) => i.start).sort((a, b) => a - b);
        const end = intervals.map((i) => i.end).sort((a, b) => a - b);

        // s and e are the traacker for start and end arrays
        let s = 0, e = 0, maxSlot = 0, currSlot = 0;

        // now we can use start and end cuz we are simmulating time
        while(s < len) {
            // condition one is we need addition slot
            if(start[s] < end[e]) {
                s++;
                currSlot++;
            } else {
                // when the car leaves we need to reduce the spot
                e++;
                currSlot--;
            }

            maxSlot = Math.max(maxSlot, currSlot);
        }

        return maxSlot;
        // sweep line algorithm 
        // const len = intervals.length;

        // const map = new Map();

        // for(const {start, end} of intervals) {
        //     map.set(start, (map.get(start) ?? 0) + 1);
        //     map.set(end, (map.get(end) ?? 0) - 1);
        // }

        // // create sorted map 
        // // since you are simulating time events musts happen in order
        // const sortedKeys = Array.from(map.keys()).sort((a, b) =>  a - b);


        // let maxSlot = 0;
        // let currSlot = 0;
        // for (const key of sortedKeys) {
        //     currSlot  +=  map.get(key);

        //     maxSlot = Math.max(currSlot, maxSlot);
        // }


        // return maxSlot;
    }
}
