import { Primes, Primes2 } from "./Primes.js";

console.time("primes");
const primes1 = Primes(10000);
console.timeEnd("primes");
console.log("primes1: ", primes1);

// LESS EFFICIENT
console.time("primes2");
const primes2 = Primes2(10000);
console.timeEnd("primes2");
console.log("primes2: ", primes2);
