console.log("ok");

console.log(productos)
const productos = [
    {
        imagen: "images/p-oveja.jpg",
        nombre: "Títere de dedo Oveja",
        descripcion: "Tejido a crochet. Ideal para niños de 3 a 7 años",
        precio: "2500",
    },
    {
        imagen: "images/p-conejo.jpg",
        nombre: "Títere de dedo Conejo",
        descripcion: "Tejido a crochet. Ideal para niños de 3 a 7 años",
        precio: "2500",
    },
    {
        imagen: "images/p-chancho.jpg",
        nombre: "Títere de dedo Chancho",
        descripcion: "Tejido a crochet. Ideal para niños de 3 a 7 años",
        precio: "2500",
    },
  
]

console.log(productos[2].nombre)

let creaciones = "";

const contenedorCreaciones = document.getElementById("contenedorCreaciones")

const listaCarrito = document.querySelector("#carrito ul");

const totalCarrito = document.querySelector("#carrito p");

const botonBorrar = document.querySelector("#boton-borrar");

const botonPagar = document.querySelector("#boton-pagar");

const mensajePagarCarrito = document.getElementById("mensajeCarrito");

let totalAPagar = 0;



/***** Zona de definición de funciones */

function crearCardsConDatos() {
    for (let indice = 0; indice < productos.length; indice++) {
        creaciones += ` 
                    <div class="contenedorCreaciones">
                        <img src=${productos[indice].imagen}
                            alt="foto de titere">
                        <div class="creaciones">
                            <h3>${productos[indice].nombre}</h3>
                            <h3>Precio: $${productos[indice].precio}</h3>
                            <p>${productos[indice].descripcion}</p>
                            <a href="">Ver + info</a>                            
                            <input class="boton-agregar-carrito" type="button" value="Agregar al carrito">
                        </div>
                    </div>
        `;
    }
    contenedorCursos.innerHTML = creaciones;
}


//listener

function crearListenersBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".boton-agregar-carrito");
    console.log(botonesAgregar)
    for (let indice = 0; indice < botonesAgregar.length; indice++) {
        console.log("b")
        
        function agregarElemCarrito() {
            const elementoLi = document.createElement("li");
            elementoLi.innerText = `item ${productos[indice].nombre} $${productos[indice].precio} `;
            listaCarrito.appendChild(elementoLi);
            totalAPagar += productos[indice].precio;
            totalCarrito.innerText = "Total a Pagar: $" + totalAPagar;
            mensajePagarCarrito.innerText = "";
        }
        botonesAgregar[indice].addEventListener("click", agregarElemCarrito);
    }
}

function borrarCarrito() {
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a Pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = ""
}

function irAPagar() {
    if (listaCarrito.innerText === "") {
        mensajePagarCarrito.innerText = "No has seleccionado ningún producto"
    } else {
        window.location.href = "./pagos.html"
    }
}

crearCardsConDatos()

crearListenersBotonesAgregar()

botonBorrar.addEventListener("click", borrarCarrito);

botonPagar.addEventListener("click", irAPagar)

