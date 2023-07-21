//prendo l'elemento ul dal DOM
const list = document.getElementById("list");

//scrivo i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  console.log(i);

  //se i numeri saranno multipli di 3 e di 5 si chiameranno FizzBuzz
  if (i % 3 == 0 && i % 5 == 0) {
    list.innerHTML += `<li>FizzBuzz</li>`;
    //mentre se i numeri saranno multipli di 3 chiameranno Fizz
  } else if (i % 3 == 0) {
    list.innerHTML += `<li>Fizz</li>`;
    //mentre se i numeri saranno multipli di 5 chiameranno Buzz
  } else if (i % 5 == 0) {
    list.innerHTML += `<li>Buzz</li>`;
    //altrimenti saranno numeri interi
  } else list.innerHTML += `<li>${i}</li>`;
}
