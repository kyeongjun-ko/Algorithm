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
 * @return {number}
 */

var maxDepth = function(root) {
    let MaxDepth = 0;

    const dfs = (node, depth) => {
        if (node !== null) {
            console.log("지금 노드의 위치", node, depth);

        if (MaxDepth < depth) MaxDepth = depth;

            if (node.left !== null) dfs(node.left, depth + 1);
            if (node.right !== null) dfs(node.right, depth + 1);

            return;
        }
        
    }

    dfs(root, 1);

    console.log("MaxDepth", MaxDepth);

    return MaxDepth;
};