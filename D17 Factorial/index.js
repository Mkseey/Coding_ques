function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  console.log(factorial(5));
  console.log(factorial(0));
  console.log(factorial(1)); 