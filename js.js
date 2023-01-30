




let productos=[
{id:1,nombre:"Campera adidas Boca Juniors Anthem De Hombre",precio:11200,categoria:"campera",stock:15,imgUrl:"https://sporting.vtexassets.com/arquivos/ids/209996/6GL7526-000-1.jpg?v=637351851600800000"},
{id:2,nombre:"Campera Reebok Training Supply de Hombre",precio:14800,categoria:"campera",stock:8,imgUrl:"https://static.dafiti.com.ar/p/reebok-2487-465566-1-product.jpg"},
{id:3,nombre:"Botines adidas Copa Sense .1 FG De Hombre",precio:62000,categoria:"botines",stock:11,imgUrl:"https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/o/botines-de-futbol-adidas-copa-sense-1-fg-amarillo-100010gw3604001-1.jpg"},
{id:4,nombre:"Remera Nike Academy De Hombre",precio:8900,categoria:"remera",stock:18,imgUrl:"https://http2.mlstatic.com/D_NQ_NP_789831-MLA46200362504_052021-W.jpg"},
{id:5,nombre:"Campera adidas Marathon De Hombre",precio:20000,categoria:"campera",stock:6,imgUrl:"https://assets.adidas.com/images/w_600,f_auto,q_auto/ceb9bacd074349e7b950ac8001129160_9366/Campera_Marathon_3_Tiras_Blanco_GK6111_01_laydown.jpg"},
{id:6,nombre:"Short Nike Challenger De Hombre",precio:11300,categoria:"short",stock:4,imgUrl:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw16e5ff91/products/NI_AJ7685-010/NI_AJ7685-010-1.JPG"},
{id:7,nombre:"Campera adidas Rompevientos TRVL Tiger De Hombre",precio:26000,categoria:"campera",stock:14,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HVwS0kITPGmt4xHZvet4oEW3a9xNHEkToJNp9MLfbjwqWX8cEixcbNTSHx7aTZlUafA&usqp=CAU"},
{id:8,nombre:"Short Babolat Viper De Hombre",precio:9200,categoria:"short",stock:7,imgUrl:"https://http2.mlstatic.com/D_NQ_NP_865823-MLA53141581720_012023-O.webp"},
{id:9,nombre:"Short adidas Alternativo Selección Argentina",precio:9000,categoria:"short",stock:8,imgUrl:"https://media.solofutbol.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/s/h/short-de-argentina-adidas-alternativo-ni_o-violeta-100020hf1487001-1.jpg"},
{id:10,nombre:"Botines Puma Future Z 4.4 TT De Hombre",precio:24500,categoria:"botines",stock:22,imgUrl:"https://rossettiar.vtexassets.com/arquivos/ids/247877-800-auto?v=638065373703500000&width=800&height=auto&aspect=true"},
{id:11,nombre:"Remera Topper Rvr De Hombre",precio:8000,categoria:"remera",stock:18,imgUrl:"https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwefb5d370/products/TO_165563/TO_165563-1.JPG"},
{id:12,nombre:"Botines adidas X Speedportal .1 FG De Hombre",precio:62000,categoria:"botines",stock:8,imgUrl:"https://sporting.vtexassets.com/arquivos/ids/606975/6GW8426-000-1.jpg?v=637964254810400000"},
{id:13,nombre:"Remera Steel Custom Sublimada De Hombre",precio:7800,categoria:"remera",stock:13,imgUrl:"https://sporting.vtexassets.com/arquivos/ids/692312-800-800?v=638089448459800000&width=800&height=800&aspect=true"},
{id:14,nombre:"Short Asics Limited Edition De Hombre",precio:11300,categoria:"short",stock:8,imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv92Bjjfh2aXckG5yvJKlhiko4xzEqS6bZnQViMDsDxx3co-OeFp25JcLF5zD53iej9po&usqp=CAU"},
{id:15,nombre:"Botines Umbro Fútbol Sala Velocita 6 Club IC de Hombre",precio:19000,categoria:"botines",stock:8,imgUrl:"https://sporting.vtexassets.com/arquivos/ids/689362-800-800?v=638083727435600000&width=800&height=800&aspect=true"},
{id:16,nombre:"Botines Topper San Ciro V TF de Hombre",precio:13000,categoria:"botines",stock:4,imgUrl:"https://sporting.vtexassets.com/arquivos/ids/369832-800-800?v=637677355041970000&width=800&height=800&aspect=true"},
{id:17,nombre:"Short De Baño Salomon Chase Classic De Hombre",precio:10000,categoria:"short",stock:8,imgUrl:"https://sporting.vtexassets.com/arquivos/ids/685130-800-800?v=638079259356170000&width=800&height=800&aspect=true"},
{id:18,nombre:"Short adidas Tech De Hombre",precio:18000,categoria:"short",stock:6,imgUrl:"https://sporting.vtexassets.com/arquivos/ids/685205-800-800?v=638079340086470000&width=800&height=800&aspect=true"},
{id:19,nombre:"Remera Puma Independiente Iconic De Hombre",precio:9500,categoria:"remera",stock:8,imgUrl:"https://celadasa.vtexassets.com/arquivos/ids/220977-800-auto?v=638067169480130000&width=800&height=auto&aspect=true"},
{id:20,nombre:"Campera NIKE AIR",precio:35000,categoria:"campera",stock:11,imgUrl:"https://http2.mlstatic.com/D_NQ_NP_765898-MLU49421226675_032022-W.jpg"},
]
let carrito=[]
if(localStorage.getItem("carrito")){
  let carritoLocalStorage=localStorage.getItem("carrito")
  carrito=JSON.parse(carritoLocalStorage)
}
let inputBuscar=document.getElementById("inputBuscar")
inputBuscar.addEventListener("change",filtrar)
inputBuscar.addEventListener("input",filtrar)
let buscarXCategoria=document.getElementById("shop")
buscarXCategoria.onclick=filtrarRopa
function filtrar() {
  let productosFiltrados=productos.filter(producto=>producto.nombre.toLowerCase().includes(inputBuscar.value.toLowerCase()) || producto.categoria.toLowerCase().includes(inputBuscar.value.toLowerCase()))
  renderizarTarjetas(productosFiltrados)
}
function filtrarRopa() {
  let filtrarRopa=productos.filter(producto=>producto.categoria.includes(buscarXCategoria.value))
  if (buscarXCategoria.value!="selected") {
    renderizarTarjetas(filtrarRopa)
  }
  else{ renderizarTarjetas(productos)}
  
}


let contenedorTarjetas=document.getElementById("contenedorTarjetas")
function renderizarTarjetas(arrayProductos) {
    contenedorTarjetas.innerHTML=""
    arrayProductos.forEach(producto => {
      let tarjetas=document.createElement("div")
      tarjetas.classList.add("producto")
      tarjetas.id=`tarjeta${producto.id}`
      tarjetas.innerHTML=
      `<img src="${producto.imgUrl}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
       <button class=botonCarro id=${producto.id}>Agregar al<i class="fa-brands fa-shopify"></i> </button>`
        contenedorTarjetas.append(tarjetas)
        let boton=document.getElementById(producto.id)
        boton.classList.add(`boton${producto.id}`)
        boton.onclick=agregarCarrito



       
        
        
    });}
    
    function agregarCarrito(e) {
     let id =e.target.id 
    let buscarProductos=productos.find(producto=>producto.id==id)
    let productosCarrito=carrito.find(producto=>producto.id==buscarProductos.id)
   
   
    Toastify({

      text: "Producto agregado",
      className: "aaa",
      
      duration: 2000,
      backgroundColor:"linear-gradient(90deg, #DA22FF, #9733EE)",
     
      
      }).showToast();
      
   
    
    if (productosCarrito) {
      let posicionProducto=carrito.findIndex(producto=>producto==productosCarrito)
      
      carrito[posicionProducto].unidades++
      carrito[posicionProducto].subtotal= carrito[posicionProducto].precio *  carrito[posicionProducto].unidades
      
    }  else{buscarProductos.unidades=1
     
     
           
            buscarProductos.subtotal=buscarProductos.precio
            
            carrito.push(buscarProductos)}
            localStorage.setItem("carrito" , JSON.stringify(carrito))
            renderizarCarrito(carrito)
           
            
    }
    let contadorCarrito=document.getElementById("contadorCarrito")
  
    let carroContenedor=document.getElementById("carroContenedor")
    renderizarTarjetas(productos)
    renderizarCarrito(carrito)
    
   
    function compra() {
      
    if (carrito.length>0) {
      
      localStorage.removeItem("carrito")
      carrito=[]
       
      
      
       
      contadorCarrito.innerText=""
      renderizarCarrito(carrito)
      Swal.fire({
       
        icon: 'success',
        title: 'Compra realizada con exito',
        showConfirmButton: false,
        timer: 1500
      })
      mostrarOcultarCarro() 
       
    }
    else if (carrito.length==0) {
      Swal.fire({
        title: 'No hay productos en el Carrito',
        icon:  'error',
        showConfirmButton: false,
        timer: 1000
        
        
        })
    mostrarOcultarCarro() }
    
    }
      
      
    
     
      
     
    
    function renderizarCarrito(productosEnCarrito) {
     
      
      carroContenedor.innerText=""
     
      let precioTotal=0
      
     
      productosEnCarrito.forEach(producto => {
        precioTotal+=producto.subtotal
       let tarjetaProducto=document.createElement("div")
       tarjetaProducto.classList.add("itemCarrito") 
       let contadorProductos=document.createElement("div")
       contadorProductos.classList.add("itemContador") 
        
      
       tarjetaProducto.innerHTML+=
       ` <button onClick=eliminarDelCarrito(eliminar${producto.id}) class=botonX id=eliminar${producto.id}>X</button>
       <img src="${producto.imgUrl}">
       <div class=incrementarReducir>
       <button  onClick=reducirDelCarrito(reducir${producto.id}) class=botonX id=reducir${producto.id}>-</button>
        <p class="unidad">${producto.unidades}</p>
        <button onClick=incrementarDelCarrito(incrementar${producto.id}) class=botonX id=incrementar${producto.id}>+</button>
        </div>
        <p class="subtotal">$${producto.subtotal}</p>
        `
      
     
        contadorCarrito.innerText=""
        
        contadorProductos.innerHTML+=
        `
         <lord-icon
         src="https://cdn.lordicon.com/nlzvfogq.json"
         trigger="loop"
         delay="1000"
         colors="primary:#242424,secondary:#8930e8"
         style="width:60px;height:60px">
         </lord-icon>
        `
       
       
        carroContenedor.appendChild(tarjetaProducto)
        contadorCarrito.appendChild(contadorProductos)
       
        
        
       
      })
      
    
      let precioTotal1=document.createElement("div")
      precioTotal1.classList.add("precioTotal")
      precioTotal1.innerHTML=`<p class="total">TOTAL:$<strong>${precioTotal}</strong></p>`
      let finalizarCompra=document.createElement("div")
      finalizarCompra.classList.add("finalizarC")
      finalizarCompra.innerHTML=`<button id=finalizar>Comprar</button>`
      let vaciarCarrito=document.createElement("button")
      vaciarCarrito.innerText="Vaciar Carrito"
      vaciarCarrito.classList.add("vaciarCarro")
      
      carroContenedor.appendChild(precioTotal1)
      carroContenedor.appendChild(vaciarCarrito)
      carroContenedor.appendChild(finalizarCompra)
     
      let comprar=document.getElementById("finalizar")
      comprar.onclick=compra
      
      vaciarCarrito.onclick=vaciar
      if (carrito.length==0) {
        vaciarCarrito.classList.toggle("ocultar")
       }
       
    }

 

let logoCarrito=document.getElementById("buttonCarro")
 
    logoCarrito.onclick= mostrarOcultarCarro
 
function vaciar() {
  

 Swal.fire({
  title: 'Estas seguro que desea vaciar el carrito?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Vaciar!'
}).then((result) => {
  if (result.isConfirmed) {
   
    localStorage.removeItem("carrito")
    carrito=[]
    contadorCarrito.innerText=""
           
    
    renderizarCarrito(carrito)
    mostrarOcultarCarro()

 
    Swal.fire({
      title: 'Operacion exitosa!',
      icon:  'success',
      showConfirmButton: false,
      timer: 1000
      
      
      })
      
  }
 
})


  
}
function eliminarDelCarrito(e) {
  
  let id= e.id.slice(8)
  let productoEliminar = carrito.findIndex(prod=>prod.id==id)
  Swal.fire({
    title: 'Estas seguro que desea eliminar el producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
     
    carrito.splice(productoEliminar,1)
    localStorage.setItem("carrito" , JSON.stringify(carrito))
   renderizarCarrito(carrito)
   if (carrito.length==0) {
    localStorage.removeItem("carrito")
    
    renderizarCarrito(carrito)
    contadorCarrito.innerText=""
    mostrarOcultarCarro()
   }
   
      Swal.fire({
        title: 'Producto Eliminado',
        icon:  'success',
        showConfirmButton: false,
        timer: 1000
        
        
        })
        
    }
   
  })
  
 
 
}
function reducirDelCarrito(e) {
  let id= e.id.slice(7)
  let productoReducir = carrito.findIndex(prod=>prod.id==id)
 
    carrito[productoReducir].unidades--
    carrito[productoReducir].subtotal=carrito[productoReducir].subtotal-carrito[productoReducir].precio
    
    
    
  renderizarCarrito(carrito)
  localStorage.setItem("carrito" , JSON.stringify(carrito))
  
  
    if(  carrito[productoReducir].unidades==0){
      carrito.splice(productoReducir,1)
     
      localStorage.setItem("carrito" , JSON.stringify(carrito))
      renderizarCarrito(carrito)
      
     
    
     
      
   }if (carrito.length==0) {
    localStorage.removeItem("carrito")
    contadorCarrito.innerText=""
    mostrarOcultarCarro()
   }
   
 
}


function incrementarDelCarrito(e) {
  let id= e.id.slice(11)
  let productoIncrementar = carrito.findIndex(prod=>prod.id==id)
 
    carrito[productoIncrementar].unidades++
    carrito[productoIncrementar].subtotal=carrito[productoIncrementar].subtotal+carrito[productoIncrementar].precio
    localStorage.setItem("carrito" , JSON.stringify(carrito))

  renderizarCarrito(carrito)
  
}


function mostrarOcultarCarro() {
  
    contenedorTarjetas.classList.toggle("ocultar")
  carroContenedor.classList.toggle("ocultar")

    
 
  
  
}

