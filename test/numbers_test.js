const test = require('ava');

const numbers = require('../src/numbers');

test.skip('sum two numbers', t => {
    t.is(numbers.sum(1, 2), 3);
    t.is(numbers.sum(10, -50), -40);
});

test.skip('is even', t => {
    t.true(numbers.even(0));
    t.true(numbers.even(2));
    t.true(numbers.even(888));
    t.false(numbers.even(1));
    t.false(numbers.even(123432123411));
});

test.skip('is odd', t => {
    t.false(numbers.odd(222));
    t.false(numbers.odd(0));
    t.true(numbers.odd(1));
    t.true(numbers.odd(111));
});

test.skip('is prime', t => {
    t.true(numbers.prime(2));
    t.false(numbers.prime(4));
    t.true(numbers.prime(7));
    t.true(numbers.prime(11));
});

test.skip('sum all array', t => {
    t.is(numbers.sumAll([1, 2, 3, 4]), 10);
    t.is(numbers.sumAll([1]), 1);
    t.is(numbers.sumAll([1, 1, -1, -1]), 0);
});

test.skip('sum all varargs', t => {
    t.is(numbers.sumAll(1, 2, 3, 4), 10);
    t.is(numbers.sumAll(100, 500, 0), 600);
});
