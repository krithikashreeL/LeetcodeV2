function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {


    let queue: Array<[string, number]> = []
    queue.push([beginWord, 1])

    let set: Set<string> = new Set()
    for (const word of wordList) {
        set.add(word)
    }

    if (!set.has(endWord) || beginWord == endWord) {
        return 0
    }
    let head = 0
    let seen = new Set()

    while (queue.length > 0) {
        let [currentWord, count] = queue.shift()!
        if (currentWord == endWord) {
            return count
        }
        // head += 1


        for (const word of set) {
            if (word == currentWord) {
                continue
            }
            let diff = 0
            let len = word.length


            for (let i = 0; i < len; i++) {
                if (word[i] !== currentWord[i]) {
                    diff += 1
                    if (diff > 1) {
                        break
                    }
                }
            }
            

            if (!seen.has(word) && diff == 1) {
                seen.add(word)
                // console.log("currentWord",  currentWord, newWord, count, diff)
                queue.push([word, count + 1])
                // console.log(queue)
            }
        }
    }

    return 0
};