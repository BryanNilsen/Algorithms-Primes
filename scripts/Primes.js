/*
    Description:
    The Primes function below takes an integer as an argument.
    That integer represents the top end of the range for which
    we will find all of the prime numbers within that range
*/

// the following is based off:
// https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100

export const Primes = (max) => {
  //   array to hold primes
  const primesArray = [];
  const sieve = [];
  let loopCount = 0;
  for (let i = 2; i <= max; i++) {
    loopCount++;
    if (!sieve[i]) {
      // i is not in sieve and is prime
      primesArray.push(i);
      for (let j = i * 2; j <= max; j += i) {
        loopCount++;
        sieve[j] = true;
      }
    }
  }
  console.log("Loop Count - Primes1:", loopCount);
  return primesArray;
};

// My attempt by removing primes from an array of numbers from 2 to max
export const Primes2 = (max) => {
  let loopCount = 0;
  // array from 2 to max
  const numArray = Array.from({ length: max - 1 }, (v, i) => i + 2);
  for (let i = 1; i < numArray.length; i++) {
    loopCount++;
    // check if current number is divisible by any numbers up to this number
    for (let j = 0; j < i; j++) {
      loopCount++;
      if (numArray[i] % numArray[j] === 0) {
        // remove non-prime from array
        numArray.splice(i, 1);
        // decrement i to rerun this index position since we just removed it from the array
        i--;
        break;
      }
    }
  }
  console.log("Loop Count - Primes2:", loopCount);
  return numArray;
};
