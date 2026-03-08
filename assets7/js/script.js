const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

function handleChange(e) {
  if (e.target.name === "backgroundColor") {
    btn.style.backgroundColor = e.target.value;
  } else if (e.target.name === "texto") {
    btn.innerHTML = e.target.value;
  } else if (e.target.name === "color") {
    btn.style.color = e.target.value;
  } else if (e.target.name === "height") {
    btn.style.height = e.target.value + "px";
  } else if (e.target.name === "width") {
    btn.style.width = e.target.value + "px";
  } else if (e.target.name === "border") {
    btn.style.border = e.target.value;
  } else if (e.target.name === "borderRadius") {
    btn.style.borderRadius = e.target.value + "px";
  } else if (e.target.name === "fontFamily") {
    btn.style.fontFamily = e.target.value;
  } else if (e.target.name === "fontSize") {
    btn.style.fontSize = e.target.value + "px";
  }

  showStyle(btn);
}

function showStyle(element) {
  const css = document.querySelector(".css");
  const estilos = element.style.cssText.split("; ").join("; <br>");
  css.innerHTML = estilos;
  salvaEstilos(element);
}

function salvaEstilos(element) {
  localStorage.setItem("estilos", JSON.stringify(element.style.cssText));
}

function carregaEstilos() {
  const css = document.querySelector(".css");
  const estilosSalvos = localStorage.getItem("estilos");

  if (estilosSalvos) {
    const obj = JSON.parse(estilosSalvos);
    css.innerHTML = obj.split("; ").join("; <br>");
  }
}

carregaEstilos();
controles.addEventListener("change", handleChange);
