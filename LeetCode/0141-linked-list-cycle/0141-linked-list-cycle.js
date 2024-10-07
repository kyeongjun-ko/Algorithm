/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


var hasCycle = function(head) {
    const nodeSet = new Set();

    let currentNode = head;

    while (currentNode !== null) {
        if (nodeSet.has(currentNode)) {
            return true;
        }

        nodeSet.add(currentNode);

        currentNode = currentNode.next;
    }
    
    return false;
};