function reverseBits(n: number): number {
    let bin = n.toString(2).padStart(32,'0')
    let reverse = bin.split('').reverse().join('').padStart(32,'0')
    // console.log(reverse)
    return parseInt(reverse,2)
};