function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];

    // 1. Build adjacency list using Sets for O(1) removal
    const adj: Set<number>[] = Array.from({ length: n }, () => new Set());
    
    for (const [u, v] of edges) {
        adj[u].add(v);
        adj[v].add(u);
    }

    // 2. Initialize leaves (nodes with degree === 1)
    let leaves: number[] = [];
    for (let i = 0; i < n; i++) {
        if (adj[i].size === 1) {
            leaves.push(i);
        }
    }

    // 3. Trim leaves layer by layer until 1 or 2 central nodes remain
    let remainingNodes = n;
    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        const newLeaves: number[] = [];

        for (const leaf of leaves) {
            // Get the single neighbor connected to this leaf
            const neighbor = adj[leaf].values().next().value!;
            
            // Remove the edge leaf -> neighbor in O(1)
            adj[neighbor].delete(leaf);

            // If neighbor becomes a new leaf, collect it for the next round
            if (adj[neighbor].size === 1) {
                newLeaves.push(neighbor);
            }
        }

        leaves = newLeaves;
    }

    return leaves;
}