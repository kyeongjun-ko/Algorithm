/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    const depthMap = {};
    const result = [];
    let search = [[root, 0]];

    if (root === null) return [];
    
    while (search.length !== 0) {
        const [targetNode, targetDepth] = search.shift();

        if (result[targetDepth]) {
            result[targetDepth] = [...result[targetDepth], targetNode.val];
        } else {
            result[targetDepth] = [targetNode.val];
        }

        // if (depthMap[targetDepth]) {
        //     depthMap[targetDepth].push(targetNode.val);
        // } else {
        //     depthMap[targetDepth] = [targetNode.val];
        // }

        if (targetNode.left) search.push([targetNode.left, targetDepth + 1]);
        if (targetNode.right) search.push([targetNode.right, targetDepth + 1]);
    }
    
    // return Object.values(depthMap);
    return result;
};