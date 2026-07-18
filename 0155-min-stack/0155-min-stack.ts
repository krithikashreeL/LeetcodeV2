class MinStack {

    public min
    public stack:number[];
    constructor() {
        this.stack = []
        this.min = Infinity
    }

    push(value: number): void {
        this.stack.push(value)
        if (value < this.min) {
            this.min = value
        }
    }

    pop(): void {
        let top = this.stack.pop()
        if(top == this.min){
            this.min = Math.min(...this.stack)
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */