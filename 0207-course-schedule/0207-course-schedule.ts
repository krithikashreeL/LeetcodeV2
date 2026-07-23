function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let map = new Map<number, number[]>
    for (let [i, j] of prerequisites) {
        let val = map.get(i) ?? []
        val.push(j)
        map.set(i, val)
    }

    function canTake(src, dest) {
        let queue: number[] = map.get(src) ?? []
        let seen = new Set()

        while (queue.length > 0) {
            let top = queue.shift()!
            if (top == dest) {
                return false
            }
            let val = map.get(top) ?? []
            for (let v of val) {
                if (!seen.has(v)) {
                    seen.add(v)
                    queue.push(v)
                }
            }

        }

        return true
    }

    for (let i = 0; i < numCourses - 1; i++) {
        if (map.has(i)) {
            let pass = canTake(i, i)
            if (!pass) {
                return false
            }
        }
    }


    return true


};

