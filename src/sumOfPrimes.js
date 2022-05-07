export const sumOfPrimes = (start, end) => {
    let primes = getListOfPrimes(start, end)
    if (primes.length > 1) {
        return primes.reduce(sum)
    } else if (primes.length == 1) {
        return primes[0]
    } else {
        return 0
    }
}

export const markNumber = (number, mark=",") => {
    number = number.toString()
    mark = mark[0]
    let marked_number = ""
    let count = 1
    for (let i = number.length-1; i >= 0; i--) {
        marked_number = number[i] + marked_number
        if (count % 3 == 0 && count < number.length) {
            marked_number = mark + marked_number
        }
        count += 1
    }
    return marked_number
}

export const getListOfPrimes = (start, end) => {
    let listOfPrimes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            listOfPrimes.push(i);
        }
    }
    return listOfPrimes;
}

const sum = (x, y) => x + y;

export const isPrime = (n) => {
    if (n === 1 || n === -1) {
        return false;
    }
    if (n % 2 === 0 && n !== 2) {
        return false
    }
    for (let i = 3; i <= n-1; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}