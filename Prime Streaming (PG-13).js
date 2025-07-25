class Primes {
  static * stream() {
    yield 2
    all:for (let num = 3; num < Infinity; num += 2) {
      for (let i = 3; i * i <= num; i += 2) 
        if (num % i === 0) continue all; 
      
      yield num
    }
  }
}