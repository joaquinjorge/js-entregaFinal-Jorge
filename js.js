fetch("productos.json")
  .then((resp) => resp.json())
  .then((productos) => miPrograma(productos))
  .catch((error) => console.log(error));

function miPrograma(productos) {
  let carrito = [];
  if (localStorage.getItem("carrito")) {
    let carritoLocalStorage = localStorage.getItem("carrito");
    carrito = JSON.parse(carritoLocalStorage);
  }
  let inputBuscar = document.getElementById("inputBuscar");
  inputBuscar.addEventListener("change", filtrar);
  inputBuscar.addEventListener("input", filtrar);
  let buscarXCategoria = document.getElementById("shop");
  buscarXCategoria.onclick = filtrarRopa;
  function filtrar() {
    let productosFiltrados = productos.filter(
      ({ nombre, categoria }) =>
        nombre.toLowerCase().includes(inputBuscar.value.toLowerCase()) ||
        categoria.toLowerCase().includes(inputBuscar.value.toLowerCase())
    );
    renderizarTarjetas(productosFiltrados);
  }
  function filtrarRopa() {
    let filtrarRopa = productos.filter((producto) =>
      producto.categoria.includes(buscarXCategoria.value)
    );
    if (buscarXCategoria.value != "selected") {
      renderizarTarjetas(filtrarRopa);
    } else {
      renderizarTarjetas(productos);
    }
  }

  let contenedorTarjetas = document.getElementById("contenedorTarjetas");
  function renderizarTarjetas(arrayProductos) {
    contenedorTarjetas.innerHTML = "";
    arrayProductos.forEach(({ id, nombre, precio, imgUrl: imagen }) => {
      let tarjetas = document.createElement("div");
      tarjetas.classList.add("producto");

      tarjetas.setAttribute(`id`, `tarjeta${id}`);
      tarjetas.innerHTML = `<img src="${imagen}">
        <h3>${nombre}</h3>
        <p>$${precio}</p>
       <button class=botonCarro id=${id}>Agregar al<i id=${id} class="fa-brands fa-shopify"></i> </button>`;
      contenedorTarjetas.append(tarjetas);
      let boton = document.getElementById(id);
      let botonI = document.getElementById(id);
      boton.classList.add(`boton${id}`);
      boton.onclick = agregarCarrito;
      botonI.onclick = agregarCarrito;
    });
  }

  function agregarCarrito(e) {
    let id = e.target.id;
    let buscarProductos = productos.find((producto) => producto.id == id);

    let productosCarrito = carrito.find(
      (producto) => producto.id == buscarProductos.id
    );

    if (productosCarrito) {
      let posicionProductos = carrito.findIndex(
        (producto) => producto == productosCarrito
      );
      if (
        carrito[posicionProductos].unidades < carrito[posicionProductos].stock
      ) {
        Toastify({
          text: "Producto agregado",
          className: "aaa",

          duration: 2000,
          backgroundColor: "linear-gradient(90deg, #DA22FF, #9733EE)",
        }).showToast();
        carrito[posicionProductos].unidades++;
        carrito[posicionProductos].subtotal =
          carrito[posicionProductos].precio *
          carrito[posicionProductos].unidades;
      } else if (
        carrito[posicionProductos].unidades == carrito[posicionProductos].stock
      ) {
        Toastify({
          text: "Producto sin stock",
          className: "aaa",

          duration: 2000,
          backgroundColor: "red",
        }).showToast();
      }
    } else {
      Toastify({
        text: "Producto agregado",
        className: "aaa",

        duration: 2000,
        backgroundColor: "linear-gradient(90deg, #DA22FF, #9733EE)",
      }).showToast();
      buscarProductos.unidades = 1;

      buscarProductos.subtotal = buscarProductos.precio;

      carrito.push(buscarProductos);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito(carrito);
  }
  let contadorCarrito = document.getElementById("contadorCarrito");

  let carroContenedor = document.getElementById("carroContenedor");
  renderizarTarjetas(productos);
  renderizarCarrito(carrito);
  let ordenCompra = 0;
  if (localStorage.getItem("ordenCompra")) {
    ordenCompra = JSON.parse(localStorage.getItem("ordenCompra"));
  }
  function alertComprar() {
    Swal.fire({
      title: `ticket Nro:${ordenCompra}`,

      showConfirmButton: false,
      timer: 1500,
    });
  }
  function compra() {
    if (carrito.length > 0) {
      ordenCompra++;
      localStorage.setItem("ordenCompra", JSON.stringify(ordenCompra));

      localStorage.removeItem("carrito");
      carrito = [];

      contadorCarrito.innerText = "";
      renderizarCarrito(carrito);
      Swal.fire({
        icon: "success",
        title: "Compra realizada con exito",

        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(alertComprar, 2000);

      mostrarOcultarCarro();
    } else if (carrito.length == 0) {
      Swal.fire({
        title: "No hay productos en el Carrito",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
      });
      mostrarOcultarCarro();
    }
  }

  function renderizarCarrito(productosEnCarrito) {
    carroContenedor.innerText = "";

    let precioTotal = 0;

    productosEnCarrito.forEach(({ id, unidades, subtotal, imgUrl: imagen }) => {
      precioTotal += subtotal;
      let tarjetaProducto = document.createElement("div");
      tarjetaProducto.classList.add("itemCarrito");
      let contadorProductos = document.createElement("div");
      contadorProductos.classList.add("itemContador");

      tarjetaProducto.innerHTML += ` <button class=botonX id=eliminar${id}>X</button>
       <img src="${imagen}">
       <div class=incrementarReducir>
       <button class=botonX id=reducir${id}>-</button>
        <p class="unidad">${unidades}</p>
        <button class=botonX id=incrementar${id}>+</button>
        </div>
        <p class="subtotal">$${subtotal}</p>
        `;

      contadorCarrito.innerText = "";

      contadorProductos.innerHTML += `
         <lord-icon
         src="https://cdn.lordicon.com/nlzvfogq.json"
         trigger="loop"
         delay="1000"
         colors="primary:#242424,secondary:#8930e8"
         style="width:60px;height:60px">
         </lord-icon>
        `;

      carroContenedor.appendChild(tarjetaProducto);
      contadorCarrito.appendChild(contadorProductos);
      let incrementar = document.getElementById(`incrementar${id}`);
      incrementar.onclick = incrementarDelCarrito;
      let reducir = document.getElementById(`reducir${id}`);
      reducir.onclick = reducirDelCarrito;
      let eliminarCarro = document.getElementById(`eliminar${id}`);
      eliminarCarro.onclick = eliminarDelCarrito;
    });

    let precioTotal1 = document.createElement("div");
    precioTotal1.classList.add("precioTotal");
    precioTotal1.innerHTML = `<p class="total">TOTAL:$<strong>${precioTotal}</strong></p>`;
    let finalizarCompra = document.createElement("div");
    finalizarCompra.classList.add("finalizarC");
    finalizarCompra.innerHTML = `<button id=finalizar>Comprar</button>`;
    let vaciarCarrito = document.createElement("button");
    vaciarCarrito.innerText = "Vaciar Carrito";
    vaciarCarrito.classList.add("vaciarCarro");

    carroContenedor.appendChild(precioTotal1);
    carroContenedor.appendChild(vaciarCarrito);
    carroContenedor.appendChild(finalizarCompra);

    let comprar = document.getElementById("finalizar");
    comprar.onclick = compra;

    vaciarCarrito.onclick = vaciar;
    if (carrito.length == 0) {
      vaciarCarrito.classList.toggle("ocultar");
    }
  }

  let logoCarrito = document.getElementById("buttonCarro");

  logoCarrito.onclick = mostrarOcultarCarro;

  function vaciar() {
    Swal.fire({
      title: "Estas seguro que desea vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Vaciar!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("carrito");
        carrito = [];
        contadorCarrito.innerText = "";

        renderizarCarrito(carrito);
        mostrarOcultarCarro();

        Swal.fire({
          title: "Operacion exitosa!",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  }
  function eliminarDelCarrito(e) {
    let id = e.target.id.slice(8);
    let productoEliminar = carrito.findIndex((prod) => prod.id == id);
    Swal.fire({
      title: "Estas seguro que desea eliminar el producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito.splice(productoEliminar, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito(carrito);
        if (carrito.length == 0) {
          localStorage.removeItem("carrito");

          renderizarCarrito(carrito);
          contadorCarrito.innerText = "";
          mostrarOcultarCarro();
        }

        Swal.fire({
          title: "Producto Eliminado",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  }
  function reducirDelCarrito(e) {
    let id = e.target.id.slice(7);
    let productoReducir = carrito.findIndex((prod) => prod.id == id);

    carrito[productoReducir].unidades--;
    carrito[productoReducir].subtotal =
      carrito[productoReducir].subtotal - carrito[productoReducir].precio;

    renderizarCarrito(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    if (carrito[productoReducir].unidades == 0) {
      carrito.splice(productoReducir, 1);
      Toastify({
        text: "Producto eliminado",
        className: "aaa",

        duration: 2000,
        backgroundColor: "red",
      }).showToast();

      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderizarCarrito(carrito);
    }
    if (carrito.length == 0) {
      localStorage.removeItem("carrito");
      contadorCarrito.innerText = "";
      mostrarOcultarCarro();
    }
  }

  function incrementarDelCarrito(e) {
    let id = e.target.id.slice(11);
    let productoIncrementar = carrito.findIndex((prod) => prod.id == id);
    let productoOriginal = productos.find((producto) => producto.id == id);

    if (carrito[productoIncrementar].unidades < productoOriginal.stock) {
      carrito[productoIncrementar].unidades++;
      carrito[productoIncrementar].subtotal =
        carrito[productoIncrementar].subtotal +
        carrito[productoIncrementar].precio;
      localStorage.setItem("carrito", JSON.stringify(carrito));

      renderizarCarrito(carrito);
    } else {
      Toastify({
        text: "No hay mas unidades del producto",
        className: "aaa",

        duration: 2000,
        backgroundColor: "red",
      }).showToast();
    }
  }

  function mostrarOcultarCarro() {
    contenedorTarjetas.classList.toggle("ocultar");
    carroContenedor.classList.toggle("ocultar");
  }
}
