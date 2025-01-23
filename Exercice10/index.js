//votre code ici
function printNumbers(n) {
    let result = ``;
    for (let i = 1; i <= n; i++) {
        if (i === n) {
            result+= i;
            break
        }
        result+= i + ' ';
    }
    return result;
}

export default printNumbers;

console.log(printNumbers(5));
