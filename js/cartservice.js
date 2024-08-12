function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("bicicletas")) || [];
    if(!memoria){
        const nuevoProducto = nuevoProductoParaMemoria(producto);
        localStorage.setItem("bicicletas",JSON.stringify([nuevoProducto]));
    }
    else{
        const indiceProducto = memoria.findIndex(bicicleta => bicicleta.id === producto.id)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(nuevoProductoParaMemoria(producto))
        }
        else{
            nuevaMemoria[indiceProducto].cantidad++;
        }
        localStorage.setItem("bicicletas",JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("bicicletas")) || [];
    const indiceProducto = memoria.findIndex(bicicleta => bicicleta.id ===  producto.id)
    if(memoria [indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1)
    }
    else{
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("bicicletas",JSON.stringify(memoria));
    actualizarNumeroCarrito();
}
// esto toma un producto agrega 1 en cantidad y lo devuelve
function nuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarrito =document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("bicicletas")) || [];
    const cuenta = memoria.reduce((acum, current) => acum + current.cantidad,0);
    cuentaCarrito.innerText = cuenta
}