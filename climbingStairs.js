function climbStairs(n) {
    let table = new Array(n + 1);
    table[0] = 1;
    table[1] = 1;

    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[table.length - 1];
}