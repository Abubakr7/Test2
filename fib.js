function fib() {
    var num1 = 0,
        num2 = 1,
        next,
        arr = [num1, num2],
        cnt = 2;

    function f(n) {
        while (cnt <= n) {
            next = num1 + num2;
            num1 = num2;
            num2 = next;
            arr.push(next);
            cnt++;
        }
        return arr;
    }

    return f;
}

var a = new fib();
console.log(a(5))
console.log(a(10));