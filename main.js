let form = document.querySelector(".form");
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let button = document.querySelector(".submit");
let p = document.querySelector(".resultado");
button.addEventListener("click", suma);
function suma (event){
    event.preventDefault();
    let resultado = parseInt(valor1.value) + parseInt(valor2.value);
    p.innerText = resultado;
}
