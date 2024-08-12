const contenedorTarjetas = document.getElementById("productos-conteiner");

function crearTarjetaProductos(productos){
productos.forEach(producto => {
    const nuevaBicicleta = document.createElement("div");
    nuevaBicicleta.classList = "tarjeta-producto";
    nuevaBicicleta.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <button>agregar al carrito</button>
    `
    contenedorTarjetas.appendChild(nuevaBicicleta);
    nuevaBicicleta.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
});
} 
    
crearTarjetaProductos(bicicletas); 