/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const row = grid.length;
    const col = grid[0].length;

    let numIsland = 0;

    const dfs = (x, y) => {
        const search = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        search.forEach(coord => {
            const [dx, dy] = coord;
            const newX = x + dx;
            const newY = y + dy;

            if (0 <= newX && newX < row && 0 <= newY && newY < col) {
                if (grid[newX][newY] === "1") {
                    grid[newX][newY] = "0";
                    dfs(newX, newY);
                }
            }
        });
    }

    
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === "1") {
                dfs(r, c);
                numIsland++;
            }
        }
    }

    return numIsland;
};