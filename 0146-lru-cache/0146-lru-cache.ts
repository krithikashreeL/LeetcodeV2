class LRUCache {

    public seen: Set<number>;
    public map: Map<number, number>;
    public capacity;
    constructor(capacity: number) {
        this.seen = new Set<number>()
        this.map = new Map<number, number>()
        this.capacity = capacity
    }

    get(key: number): number {
        if (this.map.has(key)) {

            if (this.seen.has(key)) {
                this.seen.delete(key);
            }
            this.seen.add(key)
            // console.log("after get", key, this.map, this.seen)
            return this.map.get(key)
        }


        return -1
    }

    put(key: number, value: number): void {
        this.map.set(key, value)
        if (this.seen.has(key)) {
            this.seen.delete(key)
        }
        this.seen.add(key)
        if (this.map.size > this.capacity) {
            // console.log("before",this.map, this.seen)
            let recent = Array.from(this.seen)[0]
            this.seen.delete(recent)
            this.map.delete(recent)
            // console.log("after",this.map,this.seen,recent)
        }
        // console.log("after put", key, this.map, this.map.size, this.capacity)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */