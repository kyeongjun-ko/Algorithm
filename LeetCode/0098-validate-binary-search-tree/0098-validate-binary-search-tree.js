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
        
        // 현재 노드의 값이 범위를 벗어나는지 확인
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        // 왼쪽 서브트리 검사: 최댓값은 현재 노드의 값
        if (node.left !== null) {
            search.push([node.left, min, node.val]);
        }
        
        // 오른쪽 서브트리 검사: 최솟값은 현재 노드의 값
        if (node.right !== null) {
            search.push([node.right, node.val, max]);
        }
    }
    
    return true;
};