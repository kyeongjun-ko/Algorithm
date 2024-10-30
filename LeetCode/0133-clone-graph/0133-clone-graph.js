/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

var cloneGraph = function(node) {
    if (!node) return node;

    const queue = [node];
    const nodeMap = {};

    while (queue.length !== 0) {
        const { val, neighbors } = queue.shift();

        // 존재하지 않는 노드면 저장하고 참조값사용, 존재하면 참조값사용
        const copyNode = nodeMap[val] ? nodeMap[val] : new _Node(val);

        if (neighbors.length !== 0 ) {
            for (let neighbor of neighbors) {
                if (!nodeMap[neighbor.val]) {
                    nodeMap[neighbor.val] = new _Node(neighbor.val);

                    queue.push(neighbor);
                }

                let neighborNode = nodeMap[neighbor.val];

                copyNode.neighbors.push(neighborNode);
            }
        }

        nodeMap[val] = copyNode;
    }

    return nodeMap[node.val];
};