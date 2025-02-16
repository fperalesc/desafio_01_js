const precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let variacion = document.querySelector(".cantidad");
let valorTotal = document.querySelector(".valor-total");

function aumentoCantidad() {
  if (variacion.innerHTML >= 10) {
    alert(
      "Puedes comprar un máximo de 10 unidades. Para ventas corporativas favor comunicarse con ventas@amd.com"
    );
  } else {
    variacion.innerHTML++;
    valorTotal.innerHTML = precio * variacion.innerHTML;
  }
}
function decrementoCantidad() {
  if (variacion.innerHTML > 0) {
    variacion.innerHTML--;
    valorTotal.innerHTML = precio * variacion.innerHTML;
  } else {
    alert("❌ No puedes ingresar cantidades negativas del producto. 😵‍💫");
  }
}
