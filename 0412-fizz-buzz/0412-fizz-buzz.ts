function fizzBuzz(n: number): string[] {

    let result = new Array(n).fill(0)

    for (let i = 1; i <= n; i++) {
        if(i%5 == 0 && i %3 == 0){
            result[i-1] = "FizzBuzz"
        }else if(i % 5 == 0){
            result[i-1] = "Buzz"
        }else if(i % 3 == 0){
            result[i-1] = "Fizz"
        }else{
            result[i-1] = String(i)
        }
    }

    return result
};