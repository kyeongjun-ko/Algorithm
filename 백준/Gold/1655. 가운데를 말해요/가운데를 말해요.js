const INPUT_PATH = "./inputs/가운데를_말해요.txt";

const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = require("fs")
	.readFileSync(filePath)
	.toString()
	.trim()
	.split("\n")
	.map(Number);

class Heap {
	constructor() {
		this.items = [];
	}

	swap(index1, index2) {
		let temp = this.items[index1];

		this.items[index1] = this.items[index2];
		this.items[index2] = temp;
	}

	parentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	leftChildIndex(index) {
		return index * 2 + 1;
	}

	rightChildIndex(index) {
		return index * 2 + 2;
	}

	parent(index) {
		return this.items[this.parentIndex(index)];
	}

	leftChild(index) {
		return this.items[this.leftChildIndex(index)];
	}

	rightChild(index) {
		return this.items[this.rightChildIndex(index)];
	}

	size() {
		return this.items.length;
	}

	peek() {
		return this.items[0];
	}
}

class MinHeap extends Heap {
	bubbleUp() {
		let index = this.items.length - 1;

		while (
			this.parent(index) !== undefined &&
			this.parent(index) > this.items[index]
		) {
			this.swap(index, this.parentIndex(index));

			index = this.parentIndex(index);
		}
	}

	bubbleDown() {
		let index = 0;

		while (
			this.leftChild(index) !== undefined ||
			this.rightChild(index) !== undefined
		) {
			if (
				this.leftChild(index) !== undefined &&
				this.rightChild(index) !== undefined
			) {
				if (
					this.leftChild(index) >= this.items[index] &&
					this.rightChild(index) >= this.items[index]
				) {
					break;
				}

				let smallerIndex;

				if (
					this.leftChild(index) < this.items[index] &&
					this.rightChild(index) < this.items[index]
				) {
					smallerIndex =
						this.leftChild(index) < this.rightChild(index)
							? this.leftChildIndex(index)
							: this.rightChildIndex(index);

					this.swap(index, smallerIndex);

					index = smallerIndex;

					continue;
				}

				smallerIndex =
					this.leftChild(index) < this.items[index]
						? this.leftChildIndex(index)
						: this.rightChildIndex(index);

				this.swap(index, smallerIndex);

				index = smallerIndex;

				continue;
			}

			let smallerIndex;

			if (this.leftChild(index) < this.items[index]) {
				smallerIndex = this.leftChildIndex(index);

				this.swap(index, smallerIndex);

				index = smallerIndex;

				continue;
			}

			break;
		}
	}

	add(item) {
		this.items[this.items.length] = item;
		this.bubbleUp();
	}

	remove() {
		let removeTarget = this.items[0];

		if (this.size() === 0) {
			return undefined;
		}

		if (this.size() === 1) {
			return this.items.pop();
		}

		this.items[0] = this.items[this.items.length - 1];
		this.items.pop();

		this.bubbleDown();

		return removeTarget;
	}
}

class MaxHeap extends Heap {
	bubbleUp() {
		let index = this.items.length - 1;

		while (
			this.parent(index) !== undefined &&
			this.parent(index) < this.items[index]
		) {
			this.swap(index, this.parentIndex(index));

			index = this.parentIndex(index);
		}
	}

	bubbleDown() {
		let index = 0;

		while (
			this.leftChild(index) !== undefined ||
			this.rightChild(index) !== undefined
		) {
			if (
				this.leftChild(index) !== undefined &&
				this.rightChild(index) !== undefined
			) {
				if (
					this.leftChild(index) <= this.items[index] &&
					this.rightChild(index) <= this.items[index]
				) {
					break;
				}

				let largerIndex;

				if (
					this.leftChild(index) > this.items[index] &&
					this.rightChild(index) > this.items[index]
				) {
					largerIndex =
						this.leftChild(index) > this.rightChild(index)
							? this.leftChildIndex(index)
							: this.rightChildIndex(index);

					this.swap(index, largerIndex);

					index = largerIndex;

					continue;
				}

				largerIndex =
					this.leftChild(index) > this.items[index]
						? this.leftChildIndex(index)
						: this.rightChildIndex(index);

				this.swap(index, largerIndex);

				index = largerIndex;

				continue;
			}

			let largerIndex;

			if (this.leftChild(index) > this.items[index]) {
				largerIndex = this.leftChildIndex(index);

				this.swap(index, largerIndex);

				index = largerIndex;

				continue;
			}

			break;
		}
	}

	add(item) {
		this.items[this.items.length] = item;
		this.bubbleUp();
	}

	remove() {
		let removeTarget = this.items[0];

		if (this.size() === 0) {
			return undefined;
		}

		if (this.size() === 1) {
			return this.items.pop();
		}

		this.items[0] = this.items[this.items.length - 1];
		this.items.pop();

		this.bubbleDown();

		return removeTarget;
	}
}

function solution(inputArguments) {
	const [N, ...rest] = inputArguments;

	const maxHeap = new MaxHeap();
	const minHeap = new MinHeap();
	const result = [];

	rest.forEach((e, index) => {
		if (index % 2 === 0) {
			maxHeap.add(e);
		} else {
			minHeap.add(e);
		}

		while (
			maxHeap.peek() !== undefined &&
			minHeap.peek() !== undefined &&
			maxHeap.peek() > minHeap.peek()
		) {
			const maxSwapTarget = maxHeap.remove();
			const minSwapTarget = minHeap.remove();

			maxHeap.add(minSwapTarget);
			minHeap.add(maxSwapTarget);
		}

		result.push(maxHeap.peek());
	});

	return result.join("\n");
}

console.log(solution(input));

