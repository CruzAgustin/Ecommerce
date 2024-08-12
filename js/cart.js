const contenedorTarjetas = document.getElementById("productos-conteiner");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");


function crearTarjetaProductos(){
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("bicicletas"));
    console.log(productos)
if(productos && productos.length > 0){
productos.forEach(producto => {
    const nuevaBicicleta = document.createElement("div");
    nuevaBicicleta.classList = "tarjeta-producto";
    nuevaBicicleta.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <div>
        <button>-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button>+</button>
    </div>
    `
    contenedorTarjetas.appendChild(nuevaBicicleta);
    nuevaBicicleta
    .getElementsByTagName("button")[1]
    .addEventListener("click",(e)=> {
        agregarAlCarrito(producto)
        crearTarjetaProductos();
        actualizarNumeroCarrito();
        actualizarTotales();
        });
    nuevaBicicleta
    .getElementsByTagName("button")[0]
    .addEventListener("click",(e)=> {
        restarAlCarrito(producto)
        crearTarjetaProductos();
        actualizarNumeroCarrito();
        actualizarTotales();
    });

});
}
} 
    
crearTarjetaProductos(); 
actualizarTotales()

function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("bicicletas"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length>0){
        productos.forEach(producto =>{
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
}