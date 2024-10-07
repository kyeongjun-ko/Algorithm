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


/**
 */


const getDepth = (node) => {
    if (node === null) {
        return 0;                                                                              
    }

    const leftDepth = getDepth(node.left);
    const rightDepth = getDepth(node.right);

    if (leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) {
        return -1
    }

    return Math.max(rightDepth, leftDepth) + 1;
}


var isBalanced = function(root) {
    return getDepth(root) !== -1;
};