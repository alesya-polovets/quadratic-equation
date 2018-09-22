module.exports = function solveEquation(equation) {
  // your implementation
    let arr, a, b, c, d, x1, x2, solutions;
    arr = equation.split(' ');
    a = +arr[0];
    if (arr[3] == '-') {
        b = +arr[4] * -1;
    }
    else {
        b = +arr[4];
    }
    if (arr[7] == '-') {
        c = +arr[8] * -1;
    }
    else {
        c = +arr[8];
    }
    d = b * b - 4 * a * c;
    if (d > 0) {
        x1 = Math.round((- b + Math.sqrt(d)) / (2 * a));
        x2 = Math.round((- b - Math.sqrt(d)) / (2 * a));
    }
    solutions = [x1, x2].sort(function (a, b) {
        return a - b;
    });
    return solutions;
};