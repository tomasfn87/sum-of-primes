const main = () => {
    let inputs = process.argv
    if (inputs.length < 4) {
        console.error("the initial and the final values must be passed")
    }

    let start = parseInt(inputs[2]);
    let end = parseInt(inputs[3]);

    return getListOfPrimes(start, end).reduce(sum)
}

const getListOfPrimes = (start, end) => {
    let listOfPrimes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            listOfPrimes.push(i);
        }
    }
    return listOfPrimes;
}

const sum = (x, y) => x + y;

const isPrime = (n) => {
    if (n === 1) {
        return false;
    }
    for (let i = n-1; i > 1; i--) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(main())
