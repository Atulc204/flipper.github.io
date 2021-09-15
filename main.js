const colors = ["red", "green", "blue", "orange", "#f1f5f8"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function() {


 
 const randomNumber = getrandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getrandomNumber() {
  return Math.floor(Math.random() * colors.length)
};

