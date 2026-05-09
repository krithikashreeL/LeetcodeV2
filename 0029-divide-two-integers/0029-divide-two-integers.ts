function divide(dividend: number, divisor: number): number {

    let sign: number = (dividend * divisor) >= 0 ? 1 : -1
    let ans = 0

    let absDividend = Math.abs(dividend)
    let absDivisor = Math.abs(divisor)
    const INT_MAX = 2147483647
    const INT_MIN = -2147483648

    if (dividend === INT_MIN && divisor === -1) return INT_MAX;
    if (dividend === INT_MAX && divisor === 1) return INT_MAX;
    if (dividend === INT_MIN && divisor === 1) return INT_MIN;
    if (dividend === INT_MAX && divisor === -1) return INT_MIN + 1;
    



    while (absDividend >= absDivisor) {

        while((absDivisor * 2) < absDividend){
            ans += 2
            absDividend -= (absDivisor * 2)
        }
        if(absDividend >= absDivisor){
        ans += 1
        absDividend -= absDivisor
        }
        // console.log( absDividend , absDivisor, ans)
  
    }


    ans =  sign < 0 ? -ans : ans
    

    if (ans > INT_MAX) return INT_MAX
    if (ans < INT_MIN) return INT_MIN
    return ans


};