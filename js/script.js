// far funzionarre il pulsante submit
document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateForm();
});
// Crea un container nel DOM
const container = document.createElement('div');
container.id = 'fizzbuzz-container';
document.body.appendChild(container);

// Stile per il container
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.gap = '10px';
container.style.padding = '20px';
// ottenere i numeri dal form
function calculateForm (){
    const number = document.getElementById('number').value;
    const numero = document.getElementById('numero').value;
// numeri da 1 a 100
    for (let i = 1; i <= 100; i++) { 
        // Crea un nuovo elemento per ogni numero/stringa
        const element = document.createElement('div');
        // Applica stili all'elemento
        element.style.padding = '10px';
        element.style.border = '1px solid #ccc';
        element.style.borderRadius = '5px';
        element.style.minWidth = '30px';
        element.style.textAlign = 'center';
        // multiplo di 3 e 5 stampi FizzBuzz
        if (i % number == 0 && i % numero == 0) {
            element.textContent = 'FizzBuzz';
            element.style.backgroundColor = '#ff69b4'; // Rosa per FizzBuzz
            console.log("FizzBuzz");
            // multiplo di 3 stampa Fizz
        } else if (i % number == 0) {
            element.textContent = 'Fizz';
            element.style.backgroundColor = '#87cefa'; // Azzurro per Fizz
            console.log("Fizz");
            // multiplo di 5 stampa Buzz
        } else if (i % numero == 0) {
            element.textContent = 'Buzz';
            element.style.backgroundColor = '#90ee90'; // Verde chiaro per Buzz
            console.log("Buzz");
        } else {
            element.textContent = i;
            element.style.backgroundColor = '#f0f0f0'; // Grigio chiaro per numeri
            // stampa i numeri tutto quello che non è multiplo di 3 e 5
            console.log(i);
        }
        // Aggiungi l'elemento al container
        container.appendChild(element);
    }

    document.getElementById('calcForm').classList.add('hidden');

}
