const list = document.getElementById("list");

for (let i = 1; i <= 100; i++) {
  console.log(i);
  list.innerHTML += `<li>${i}</li>`;
}
