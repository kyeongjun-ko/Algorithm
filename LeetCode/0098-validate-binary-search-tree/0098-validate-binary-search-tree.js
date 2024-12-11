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
 * @return {boolean}
 */


var isValidBST = function(root) {
    const search = [[root, -Infinity, Infinity]];
    
    while (search.length > 0) {
        const [node, min, max] = search.pop();
        
        if (node === null) continue;
        
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        if (node.left !== null) {
            search.push([node.left, min, node.val]);
        }
        
        if (node.right !== null) {
            search.push([node.right, node.val, max]);
        }
    }
    
    return true;
};