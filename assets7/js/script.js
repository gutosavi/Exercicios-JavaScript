const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

function handleChange(e) {
  console.log(e.target.value);
}

controles.addEventListener("change", handleChange);
