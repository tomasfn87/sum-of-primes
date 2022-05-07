import { isPrime, sumOfPrimes, markNumber, getListOfPrimes } from '../sumOfPrimes.js';
import { expect } from "chai";

describe('function isPrime(n)', function() {
  it('../sumOfPrimes.js.isPrime(0) -> false', function() {
    let result = isPrime(0);
    expect(result).to.equal(false);
  });

  it('../sumOfPrimes.js.isPrime(1) -> false', function() {
    let result = isPrime(0);
    expect(result).to.equal(false);
  });

  it('../sumOfPrimes.js.isPrime(2) -> true', function() {
    let result = isPrime(2);
    expect(result).to.equal(true);
  });

  it('../sumOfPrimes.js.isPrime(3) -> true', function() {
    let result = isPrime(3);
    expect(result).to.equal(true);
  });

  it('../sumOfPrimes.js.isPrime(4) -> false', function() {
    let result = isPrime(4);
    expect(result).to.equal(false);
  });

  it('../sumOfPrimes.js.isPrime(5) -> true', function() {
    let result = isPrime(5);
    expect(result).to.equal(true);
  });

  it('../sumOfPrimes.js.isPrime(7) -> true', function() {
    let result = isPrime(7);
    expect(result).to.equal(true);
  });

  it('../sumOfPrimes.js.isPrime(9) -> false', function() {
    let result = isPrime(9);
    expect(result).to.equal(false);
  });

  it('../sumOfPrimes.js.isPrime(11) -> true', function() {
    let result = isPrime(11);
    expect(result).to.equal(true);
  });
});

describe('function getListOfPrimes(start, end)', function() {
  it('../sumOfPrimes.js.getListOfPrimes(0,11) -> [2,3,5,7,11]', function() {
    let result = getListOfPrimes(0,11);
    expect(result).to.eql([2,3,5,7,11]);
  });

  it('../sumOfPrimes.js.getListOfPrimes(2,11) -> [2,3,5,7,11]', function() {
    let result = getListOfPrimes(2,11);
    expect(result).to.eql([2,3,5,7,11]);
  });

  it('../sumOfPrimes.js.getListOfPrimes(2,12) -> [2,3,5,7,11]', function() {
    let result = getListOfPrimes(2,12);
    expect(result).to.eql([2,3,5,7,11]);
  });

  it('../sumOfPrimes.js.getListOfPrimes(3,14) -> [3,5,7,11,13]', function() {
    let result = getListOfPrimes(3,14);
    expect(result).to.eql([3,5,7,11,13]);
  });
});

describe('function sumOfPrimes(start, end)', function() {
  it('../sumOfPrimes.js.sumOfPrimes(0,5) -> 10', function() {
    let result = sumOfPrimes(0,5);
    expect(result).to.equal(10);
  });

  it('../sumOfPrimes.js.sumOfPrimes(5,7) -> 12', function() {
    let result = sumOfPrimes(5,7);
    expect(result).to.equal(12);
  });

  it('../sumOfPrimes.js.sumOfPrimes(5,14) -> 36', function() {
    let result = sumOfPrimes(5,14);
    expect(result).to.equal(36);
  });
});

describe('function markNumber(number, mark=",")', function() {
  it('../sumOfPrimes.js.markNumber(1000) -> "1,000"', function() {
    let result = markNumber(1000);
    expect(result).to.equal('1,000');
  });

  it('../sumOfPrimes.js.markNumber(10000) -> "10,000"', function() {
    let result = markNumber(10000);
    expect(result).to.equal('10,000');
  });

  it('../sumOfPrimes.js.markNumber(1000000) -> "1,000,000"', function() {
    let result = markNumber(1000000);
    expect(result).to.equal('1,000,000');
  });

  it('../sumOfPrimes.js.markNumber(9999, ".") -> "9.999"', function() {
    let result = markNumber(9999);
    expect(result).to.equal('9,999');
  });

  it('../sumOfPrimes.js.markNumber(99999, ".") -> "99.999"', function() {
    let result = markNumber(99999);
    expect(result).to.equal('99,999');
  });

  it('../sumOfPrimes.js.markNumber(9999999, ".") -> "9.999.999"', function() {
    let result = markNumber(9999999);
    expect(result).to.equal('9,999,999');
  });
});
