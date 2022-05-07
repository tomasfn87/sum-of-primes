import { sumOfPrimes, markNumber } from '../src/sumOfPrimes.js';

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

    let sum_of_primes = sumOfPrimes(start, end)

    console.log(`Sum of the primes between ${markNumber(start)} and ${markNumber(end)}: ${markNumber(sum_of_primes)}`)
    return sum_of_primes
}

console.log(main())