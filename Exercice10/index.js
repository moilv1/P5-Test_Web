//votre code ici
function printNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i + (i < n ? ' ' : '');
    }
    return result;
}

console.log(printNumbers(10));
