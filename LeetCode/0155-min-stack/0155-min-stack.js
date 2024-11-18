var MinStack = function() {
    this.values = [];
    this.temp = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.values.push(val);
    this.temp = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.values.pop();
    this.temp = this.values[this.values.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // return this.values[this.values.length - 1];
    return this.temp;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.values);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */