// numeri da 1 a 100
for (let i = 1; i <= 100; i++) { 
    // multiplo di 3 e 5 stampi FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        // multiplo di 3 stampa Fizz
    } else if (i % 3 === 0) {
        console.log("Fizz");
        // multiplo di 5 stampa Buzz
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        // stampa i numeri tutto quello che non è multiplo di 3 e 5
        console.log(i);
    }
}
