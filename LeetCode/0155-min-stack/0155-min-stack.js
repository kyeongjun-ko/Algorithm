/*
푸시, 팝, 탑, 최소 요소 검색을 상수 시간 내에 지원하는 스택을 설계합니다. 
MinStack 클래스를 구현합니다. 
void push(int val)는 스택 객체를 초기화합니다. 
void pop()은 스택 상단의 요소를 제거합니다. 
int top()은 스택의 최상위 요소를 가져옵니다. 
int getMin()은 스택의 최소 요소를 검색합니다. 
각 함수마다 시간 복잡도가 O(1)인 솔루션을 구현해야 합니다.
*/

var MinStack = function() {
    this.values = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.values.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.values.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.values[this.values.length - 1];
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