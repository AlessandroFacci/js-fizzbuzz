const list = document.getElementById("list");

for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 3 == 0) {
    list.innerHTML += `<li>Fizz</li>`;
  } else if (i % 5 == 0) {
    list.innerHTML += `<li>Buzz</li>`;
  } else if ((i % 3 == 0) + (i % 5 == 0)) {
    list.innerHTML += `<li>FizzBuzz</li>`;
  } else list.innerHTML += `<li>${i}</li>`;
}
