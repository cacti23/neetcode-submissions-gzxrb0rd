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
        // TC -> O(n logn) + O(n * logn) -> O(n logn)
        // SC -> O(n)
        intervals.sort((a, b) => a.start - b.start);

        // stores end time for meeting
        // minHeap size will tell the number of rooms required
        const minHeap = new MinPriorityQueue();

        for(const interval of intervals) {
            if(!minHeap.isEmpty() && minHeap.front() <= interval.start) {
                minHeap.pop();
            }

            minHeap.push(interval.end);
        }

        return minHeap.size();
    }
}
