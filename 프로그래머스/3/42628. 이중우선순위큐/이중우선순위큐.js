class PriorityQueue {
	constructor() {
		this.items = [];
	}

	swap(index1, index2) {
		const temp = this.items[index1];

		this.items[index1] = this.items[index2];
		this.items[index2] = temp;
	}

	getLeftChildIndex(index) {
		return index * 2 + 1;
	}

	getRightChildIndex(index) {
		return index * 2 + 2;
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	size() {
		return this.items.length;
	}
    
    peek() {
        if (this.items.length === 0) {
            return 0;
        }
        
        return this.items[0];
    }
}

class MaxQueue extends PriorityQueue {
	bubbleDown() {
		let index = 0;

		while (this.items[this.getLeftChildIndex(index)] !== undefined) {
            let largerIndex = this.getLeftChildIndex(index);
        
			if (
				this.items[this.getRightChildIndex(index)] !== undefined &&
				this.items[largerIndex] < this.items[this.getRightChildIndex(index)]
			) {
				largerIndex = this.getRightChildIndex(index);
			}

			if (this.items[index] >= this.items[largerIndex]) {
				break;
			}

			this.swap(index, largerIndex);

			index = largerIndex;
		}
	}

	bubbleUp(index = this.size() - 1) {
		while (this.items[this.getParentIndex(index)] !== undefined) {
			let parentIndex = this.getParentIndex(index);

			if (this.items[parentIndex] >= this.items[index]) {
				break;
			}

			this.swap(parentIndex, index);
            
			index = parentIndex;
		}
	}

	add(item) {
		this.items[this.size()] = item;
        
		this.bubbleUp();
	}
    
	remove(item) {
        let targetIndex = 0;
        
        if (item !== undefined) {
            targetIndex = this.items.indexOf(item);
            
            if (targetIndex === this.size() -1) {
                return this.items.pop();
            }  
        }
        
        this.swap(targetIndex, this.size() - 1);
        
		const removeTarget = this.items.pop();
        
        if (item !== undefined) {
            this.bubbleUp(targetIndex);
        } else {
            this.bubbleDown();
        }

		this.bubbleDown();

		return removeTarget;
	}
}

class MinQueue extends PriorityQueue {
    bubbleDown() {
		let index = 0;

		while (this.items[this.getLeftChildIndex(index)] !== undefined) {
            let smallerIndex = this.getLeftChildIndex(index);
            
			if (
				this.items[this.getRightChildIndex(index)] !== undefined &&
				this.items[smallerIndex] > this.items[this.getRightChildIndex(index)]
			) {
				smallerIndex = this.getRightChildIndex(index);
			}
    
			if (this.items[smallerIndex] >= this.items[index]) {
				break;
			}

			this.swap(index, smallerIndex);
            
			index = smallerIndex;
		}
	}

	bubbleUp(index = this.size() - 1) {
		while (this.items[this.getParentIndex(index)] !== undefined) {
			let parentIndex = this.getParentIndex(index);

			if (this.items[parentIndex] <= this.items[index]) {
				break;
			}

			this.swap(parentIndex, index);

			index = parentIndex;
		}
	}

	add(item) {
		this.items[this.size()] = item;
        
		this.bubbleUp();
	}

	remove(item) {
        let targetIndex = 0;
        
        if (item !== undefined) {
            targetIndex = this.items.indexOf(item);
            
            if (targetIndex === this.size() -1) {
                return this.items.pop();
            }
        }

        this.swap(targetIndex, this.size() - 1);
        
		const removeTarget = this.items.pop();

        if (item !== undefined) {
            this.bubbleUp(targetIndex);
        } else {
            this.bubbleDown();
        }

		return removeTarget;
	}
}

function solution(operations) {
    var answer = [];
    const maxHeap = new MaxQueue();
    const minHeap = new MinQueue();
    
    operations.forEach(e => {
        const [order, number] = e.split(" ");
        
        if (order === "I") {
            maxHeap.add(Number(number));
            minHeap.add(Number(number));
        }
        
        if (order === "D") {
            if (Number(number) > 0 && maxHeap.size() !== 0) {
                const removeTarget = maxHeap.remove();
                minHeap.remove(removeTarget);
            }
            
            if (Number(number) < 0 && minHeap.size() !== 0) {
                const removeTarget = minHeap.remove();
                maxHeap.remove(removeTarget);
            }
        }
    })
    
    return [maxHeap.peek(), minHeap.peek()];
}