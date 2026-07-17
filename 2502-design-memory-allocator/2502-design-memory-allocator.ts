class Allocator {
    public memory
    public n
    public map
    public avail
    constructor(n: number) {
        this.memory = new Array(n)
        this.n = n
        this.map = new Map<string, number[]>()
        this.avail = n
    }

    allocate(size: number, mID: number): number {
        let canAllocate
        if(this.avail < size){
            return -1
        }
        let tempSize = 0
        for (let i = 0; i < this.n; i++) {
            if(this.memory[i] == null){
                tempSize += 1
            }else{
                tempSize = 0
            }
            
            if (tempSize == size) {
                canAllocate = i - size + 1
                let val: number[] = this.map.get(mID) ?? []
                for (let j = i - size + 1; j <= i ; j++) {
                    this.memory[j] = mID
                    val.push(j)
                }
                this.map.set(mID, val)
                break
            }
        }
        if(canAllocate){
            this.avail -= size
        }

        return canAllocate !== undefined ? canAllocate : -1
    }

    freeMemory(mID: number): number {
        let val = this.map.get(mID) ?? []
        let free = 0
        for (let item of val) {
            this.memory[item] = null
            free += 1
        }
        this.map.delete(mID)
        this.avail += free
        return free
    }
}

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.freeMemory(mID)
 */


