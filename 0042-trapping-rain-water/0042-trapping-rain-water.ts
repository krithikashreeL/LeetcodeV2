function trap(height: number[]): number {
    let n = height.length
    let prefixMax = new Array(n).fill(0)

    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(height[i - 1], prefixMax[i - 1])
    }

    let suffixMax = new Array(n).fill(0)

    for (let i = n - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(height[i + 1], suffixMax[i + 1])
    }
    let result = 0
    for (let i = 0; i < n; i++) {
        let canHold = Math.min(prefixMax[i], suffixMax[i]) - height[i]
        if(canHold > 0){
            result += canHold
        }
    }
    return result


};