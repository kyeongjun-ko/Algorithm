/**
 * @param {character[][]} grid
 * @return {number}
 */

// '1'(육지)과 '0'(물)의 지도를 나타내는 m x n 2D 이진 격자 격자가 주어질 때, 섬의 수를 반환합니다. 섬은 물로 둘러싸여 있으며 인접한 육지를 가로 또는 세로로 연결하여 형성됩니다. 그리드의 네 모서리가 모두 물로 둘러싸여 있다고 가정할 수 있습니다.

// 1차 Time: 157 ms (13.97%), Space: 59.6 MB (47.87%) - LeetHub

var numIslands = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const range = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    let count = 0;

    const dfs = (x, y) => {
        grid[x][y] = "0";

        range.forEach(([dx, dy]) => {
            const newX = dx + x;
            const newY = dy + y;

            const isWrong = newX < 0 || newX >= row || newY < 0 && newY >= col;

            if (isWrong) return;
            if (grid[newX][newY] === "1") {
                dfs(newX, newY);
            }
        });
    };

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === "1") {
                count++;

                dfs(r, c);
            };    
        }
    }

    return count;
};