export function range(x) {
    return Array.from(Array(x).keys())
}

export function round(number, precision) {
    if (precision === 0) return Math.round(number);
    return Math.round(number * 10**precision) / 10**precision
}
