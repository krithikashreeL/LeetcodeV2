function longestCommonSubsequence(text1: string, text2: string): number {
    let matrix: number[][] = Array.from(
        { length: text1.length },
        () => new Array(text2.length).fill(0)
    );
    let max = 0;

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                // Characters match -> extend from diagonal
                let diagonal = (i > 0 && j > 0) ? matrix[i - 1][j - 1] : 0;
                matrix[i][j] = diagonal + 1;
            } else {
                // Characters don't match -> carry over best result from left or top
                let top = i > 0 ? matrix[i - 1][j] : 0;
                let left = j > 0 ? matrix[i][j - 1] : 0;
                matrix[i][j] = Math.max(top, left);
            }
            
            max = Math.max(max, matrix[i][j]);
        }
    }

    return max;
}