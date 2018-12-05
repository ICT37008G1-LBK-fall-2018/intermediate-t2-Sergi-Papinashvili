var a = prompt("Enter First Num");
var b = prompt("Enter Second Num");
var array = [a, b];
var max = Math.max.apply(Math, array); 
var min = Math.min.apply(Math, array);

function sumSeries(smallest, largest) {
    var n = (largest - smallest + 1);
    var sum = n * (smallest + largest) / 2; 

    return sum;
}
var sum = sumSeries(min, max);
alert(sum);

if ((b <= a) && (a == 0 && b == 0)) {
    alert("ARASWORI SHUALEDI");
}
