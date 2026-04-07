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
        // only stores ending time
        if(intervals.length === 0) return 0;


        const minHeap = new MinPriorityQueue();

        intervals.sort((a, b) => a.start - b.start);

        minHeap.enqueue(intervals[0].end);

        for(let i = 1; i < intervals.length; i++) {
            if(intervals[i].start >= minHeap.front()) {
                minHeap.dequeue();
            } 
            minHeap.enqueue(intervals[i].end);
        }

        return minHeap.size();
    }
}
