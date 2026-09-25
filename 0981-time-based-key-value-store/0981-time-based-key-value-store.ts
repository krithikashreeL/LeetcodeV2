class TimeMap {
    map: Map<string, [number[], string[]]>

    constructor() {
        this.map = new Map()
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key)) {
            this.map.set(key, [[], []])
        }

        let [timestamps, values] = this.map.get(key)!

        timestamps.push(timestamp)
        values.push(value)
    }

    get(key: string, timestamp: number): string {
        let data = this.map.get(key)

        if (!data) {
            return ""
        }

        let [timestamps, values] = data

        let start = 0
        let end = timestamps.length - 1
        let result = ""

        while (start <= end) {
            let mid = Math.floor((start + end) / 2)

            if (timestamps[mid] === timestamp) {
                return values[mid]
            }

            if (timestamps[mid] > timestamp) {
                end = mid - 1
            } else {
                result = values[mid]
                start = mid + 1
            }
        }

        return result
    }
}