const main = () => {
    let inputs = process.argv
    if (inputs.length < 4) {
        console.error("the initial and the final values must be passed (both must be 0 or positive integer)")
    }

    let start = parseInt(inputs[2].replaceAll(",", "").replaceAll(".", ""));
    let end = parseInt(inputs[3].replaceAll(",", "").replaceAll(".", ""));

    if (start < 0) {
        start = 0
    }

    if (end < 0) {
        end *= -1
    }

    if (start > end) {
        [start, end] = [end, start]
    }

    sum_of_primes = sumOfPrimes(start, end)

    console.log(`Sum of the primes between ${markNumber(start)} and ${markNumber(end)}: ${markNumber(sum_of_primes)}`)
    return sum_of_primes
}

const sumOfPrimes = (start, end) => {
    return getListOfPrimes(start, end).reduce(sum)
}

const markNumber = (number, mark=",") => {
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
    if (n === 1 || n === -1) {
        return false;
    }
    if (n % 2 === 0 && n !== 2) {
        return false
    }
    for (let i = 3; i < n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(main())
