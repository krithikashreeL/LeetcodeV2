class LRUCache {
    public map;
    public n;
    constructor(capacity: number) {
        this.map = new Map<number,number>()
        this.n = capacity
    }

    get(key: number): number {
        if(this.map.has(key)){
            let val = this.map.get(key)
            this.map.delete(key)
            this.map.set(key,val)
            return val
        }
        return -1
    }

    put(key: number, value: number): void {
       
        if(this.map.has(key)){
            this.map.delete(key)
        }else if(this.map.size >= this.n){
            let top = this.map.keys().next().value
            this.map.delete(top)
        }
        this.map.set(key,value)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */