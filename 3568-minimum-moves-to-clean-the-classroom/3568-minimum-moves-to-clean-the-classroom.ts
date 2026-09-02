function minMoves(classroom: string[], energy: number): number {
    const m = classroom.length
    const n = classroom[0].length

    let Lcount = 0
    let startm = 0
    let startn = 0

    // Give every L a bit position
    const lampId = Array.from(
        { length: m },
        () => new Array(n).fill(-1)
    )

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (classroom[i][j] === 'L') {
                lampId[i][j] = Lcount++
            }

            if (classroom[i][j] === 'S') {
                startm = i
                startn = j
            }
        }
    }

    if (Lcount === 0) {
        return 0
    }

    const maskCount = 1 << Lcount
    const allLamps = maskCount - 1

    /*
        State:
        row
        col
        energy
        mask

        Instead of:

        Set<string>

        use one flat Uint8Array.
    */

    const stateCount =
        m * n * (energy + 1) * maskCount

    const seen = new Uint8Array(stateCount)

    function getId(
        r: number,
        c: number,
        e: number,
        mask: number
    ): number {
        return (
            (((r * n + c) * (energy + 1) + e) * maskCount)
            + mask
        )
    }

    // Queue stored as flat arrays
    const queueR: number[] = []
    const queueC: number[] = []
    const queueE: number[] = []
    const queueMask: number[] = []
    const queueCost: number[] = []

    let head = 0

    queueR.push(startm)
    queueC.push(startn)
    queueE.push(energy)
    queueMask.push(0)
    queueCost.push(0)

    seen[getId(startm, startn, energy, 0)] = 1

    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    while (head < queueR.length) {

        const r = queueR[head]
        const c = queueC[head]
        const e = queueE[head]
        const mask = queueMask[head]
        const cost = queueCost[head]

        head++

        // Cannot make another move
        if (e === 0) {
            continue
        }

        for (const [dr, dc] of directions) {

            const nr = r + dr
            const nc = c + dc

            if (
                nr < 0 ||
                nr >= m ||
                nc < 0 ||
                nc >= n
            ) {
                continue
            }

            if (classroom[nr][nc] === 'X') {
                continue
            }

            let ne = e - 1
            let nmask = mask

            // Pick up litter
            if (classroom[nr][nc] === 'L') {
                nmask |= 1 << lampId[nr][nc]
            }

            // Recharge
            if (classroom[nr][nc] === 'R') {
                ne = energy
            }

            const newCost = cost + 1

            if (nmask === allLamps) {
                return newCost
            }

            const id = getId(nr, nc, ne, nmask)

            if (seen[id] === 1) {
                continue
            }

            seen[id] = 1

            queueR.push(nr)
            queueC.push(nc)
            queueE.push(ne)
            queueMask.push(nmask)
            queueCost.push(newCost)
        }
    }

    return -1
}