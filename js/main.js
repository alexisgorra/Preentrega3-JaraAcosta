const autoContent = document.getElementById("autoContent")
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrirto = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product)=> {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

  autoContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "AGREGAR AL CARRITO";
  comprar.className = "AGREGAR AL CARRITO";

  content.append(comprar);

  comprar.addEventListener("click", () =>{
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    }else {
    carrito.push({
      id : product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,      
      cantidad: product.cantidad,
    });
  }
    console.log(carrito);
    carritoCounter();
    saveLocal();
  })
});

const saveLocal = () => {
  localStorage.setItem(carrito, JSON.stringify(carrito))
};
