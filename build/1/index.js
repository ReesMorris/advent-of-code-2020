"use strict";
var fs = require('fs');
var findSum = function (arr, sum) {
    console.log(findSum);
    return {};
};
var setup = function () {
    var inputs = fs
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .split('\n');
    var sum = findSum(inputs, 2020);
};
setup();
