function numDecodings(s: string): number {
    let n = s.length;
    let memo = new Map<number, number>();

    function combo(index: number): number {
        // Base case: Reached the end of the string, found 1 valid decoding path
        if (index === n) return 1;

        // Leading zero is invalid
        if (s[index] === '0') return 0;

        // Return cached result if already computed
        if (memo.has(index)) return memo.get(index)!;

        // Option 1: Take 1 digit
        let total = combo(index + 1);

        // Option 2: Take 2 digits (10-26)
        if (index + 1 < n) {
            let num2 = Number(s.substring(index, index + 2));
            if (num2 >= 10 && num2 <= 26) {
                total += combo(index + 2);
            }
        }

        memo.set(index, total);
        return total;
    }

    return combo(0);
}