const list = document.getElementById("list");

for (let i = 1; i <= 100; i++) {
  console.log(i);
  list.innerHTML += `<li>${i}</li>`;
  if (i % 3 == 0) {
    list.innerHTML += `<li>Fizz</li>`;
  }
  if (i % 5 == 0) {
    list.innerHTML += `<li>Buzz</li>`;
  }
  if ((i % 5 == 0) + (i % 3 == 0)) {
    list.innerHTML += `<li>BuzzFizz</li>`;
  }
}
