const INPUT_PATH = "./inputs/평범한_배낭.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
	const [firstLine, ...things] = inputArguments;
	const [N, K] = firstLine.split(" ").map(Number);

	const result = [];

	for (let i = 0; i <= K; i++) {
		result[i] = new Array(N).fill(0);

		for (let j = 0; j < N; j++) {
			const [W, V] = things[j].split(" ").map(Number);

			if (i === 0) {
				continue;
			}

			if (W > i) {
				if (j === 0) {
					continue;
				}

				result[i][j] = result[i][j - 1];

				continue;
			}

			if (W <= i) {
				if (j === 0) {
					result[i][j] = V;

					continue;
				}

				result[i][j] = Math.max(result[i][j - 1], V + result[i - W][j - 1]);

				continue;
			}
		}
	}

	return result[K][N - 1];
}

console.log(solution(input));