const productos = [
    {nombre: "hoodie", precio: 12000},
    {nombre: "cargopants", precio: 7000},
    {nombre: "remeras", precio: 5000},
    {nombre: "zapatillas", precio: 34000},
    {nombre: "bandana", precio: 2000},
]
let carrito = []

let seleccion = prompt("Hola, señor Fulano, desea comprar algun producto si o no")

while(seleccion !="si" && seleccion !="no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("Hola desea comprar algo si o no")
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("gracias por venir, hasta pronto!!")
}

    while(seleccion != "no"){
        let producto = prompt("agrega un producto a tu carrito")
        let precio = 0

        if(producto == "hoodie" || producto == "cargopants" || producto == "remeras" || producto == "zapatillas" || producto == "bandana"){
            switch (producto) {
            case "hoodie":
            precio = 12000
            break;
            case "cargopants":
            precio = 7000
            break;
            case "remeras":
            precio = 5000
            break;
            case "zapatillas":
            precio = 34000
            break;
            case "bandana":
            precio = 2000
            break;
            default:
            break;
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando??")
    
    while(seleccion == "no"){
        alert("gracias por la compra! hasta pronto")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}
