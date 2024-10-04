/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function(image, sr, sc, color) {
    const row = image.length;
    const column = image[0].length;
    const visited = [...new Array(row)].map(e => new Array(column).fill(0));
    const searchArea = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const originColor = image[sr][sc];

    const dfs = (grid, searchTarget, visitList) => {
        const [x, y] = searchTarget;

        if (visitList[x][y] === 0 && image[x][y] === originColor) {
            visitList[x][y] = 1;
            grid[x][y] = color;

            searchArea.forEach(newXy => {
                const [newX, newY] = [x + newXy[0], y + newXy[1]];

                if (newX >= 0 && newX < row && newY >= 0 && newY < column && visitList[newX][newY] === 0) {
                    dfs(grid, [newX, newY], visitList);
                }
            });
        }

        return grid;
    }

    return dfs(image, [sr, sc], visited);
};