function countPrimes(n: number): number {

    let primes = new Array(n).fill(1)
    primes[0] = 0
    primes[1] = 0
    // let seen = new Set()
    function isPrime(num) {
        for (let i = num * num; i < n; i += num) {
            primes[i] = 0
        }

        return
    }


    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (primes[i] == 1) {
            isPrime(i)
        }
    }
    // console.log(primes)
    let count = 0
    for (let item of primes) {
        if (item == 1) {
            count += 1
        }
    }


    return count

};