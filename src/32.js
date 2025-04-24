function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0, b = 1;
    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function sumSeries(num) {
    if (num <= 0) {
        return 0;
    }
    let seriesSum = 0;
    for (let i = 0; i < num; i++) {
        seriesSum += fibonacci(i);
    }
    return seriesSum;
}
