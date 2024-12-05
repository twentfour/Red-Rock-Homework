// 循环阶乘
/*function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}*/
// 递归阶乘
function factorial(n) {
    if (n === 1) return 1;
    else return n * factorial(n - 1);
}