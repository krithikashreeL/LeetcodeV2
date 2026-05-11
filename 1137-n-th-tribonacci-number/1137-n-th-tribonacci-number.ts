function tribonacci(n: number): number {
    let t0 = 0
    let t1 = 1
    let t2 = 1
    if (n < 3) {
        if (n == 0) {
            return 0
        }
        return 1
    }
    let result = 0

    for (let i = 3; i <= n; i++) {
         result = t0 + t1 + t2
        // console.log(t0,t1,t2, result)
        t0 = t1
        t1 = t2
        t2 = result
    }



    return result


};