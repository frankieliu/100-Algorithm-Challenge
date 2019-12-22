const getPrimes = max => {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

const sumAllPrimes = (num: number): number => {
	const primes = getPrimes(num);
	return primes.reduce((sum, cur) => sum + cur, 0);
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));