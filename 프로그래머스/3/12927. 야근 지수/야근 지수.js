class Heap {
    constructor() {
        this.items = [];
    }

    getParentIndex(index) {
        return Math.floor(index - 1 / 2);
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;    
    }

    getRightChildIndex(index) {
        return index * 2 + 2;    
    }

    swap(index1, index2) {
        const temp = this.items[index1];
        
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }

    size() { 
        return this.items.length;
    }
}

class MaxHeap extends Heap {
    bubbleUp() {
        let index = this.size() - 1;
        
        while (this.items[this.getParentIndex(index)] !== undefined) {
            const parentIndex = this.getParentIndex(index);
            
            if (this.items[parentIndex] >= this.items[index]) {
                break;
            }
            
            this.swap(index, parentIndex);
            
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        
        while (this.items[this.getLeftChildIndex(index)] !== undefined) {
            let largerIndex = this.getLeftChildIndex(index);
            
            if (this.items[this.getRightChildIndex(index)] !== undefined &&
               this.items[largerIndex] < this.items[this.getRightChildIndex(index)]) {
                largerIndex = this.getRightChildIndex(index);
            }
            
            if (this.items[index] >= this.items[largerIndex]) {
                break
            }
            
            this.swap(index, largerIndex);
            
            index = largerIndex;
        }
    }

    add (item) {
        this.items[this.size()] = item;
        
        this.bubbleUp();
    }

    remove() {
        if (this.size() === 1) {
            return this.items.pop();    
        }
        
        if (this.size() === 0) {
            return undefined;
        }
        
        this.swap(0, this.size() - 1);
        
        const target = this.items.pop();
    
        this.bubbleDown();
        
        return target;
    }

    peek() {
        return this.items[0];
    }
    
    minus() {
        if (this.size() === 0) {
            return undefined;
        }
        
        if (this.items[0] === 1) {
            this.remove();
            
            return this.items;
        }
         
        this.items[0] -= 1;
        
        this.bubbleDown();
    }
}

function solution(n, works) {
    const maxHeap = new MaxHeap();
    
    for (const item of works) {
        maxHeap.add(item);
    }
    
    for (let i = 0; i < n; i++) {
        maxHeap.minus();
    }
    
    return maxHeap.items.reduce((acc, cur) => acc + cur ** 2, 0);
}