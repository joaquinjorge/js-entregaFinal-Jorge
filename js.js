


let tienda
let carrito=[]
let productos=[
{id:1,nombre:"pantalon de independiente $4500",precio:4500,categoria:"pantalones"},
{id:2,nombre:"pantalon de river $5500",precio:5500,categoria:"pantalones"},
{id:3,nombre:"pantalon de boca $6000",precio:6000,categoria:"pantalones"},
{id:4,nombre:"remera de independiente $12000",precio:12000,categoria:"remeras"},
{id:5,nombre:"remera de river $10000",precio:10000,categoria:"remeras"},
{id:6,nombre:"remera de boca $13000",precio:13000,categoria:"remeras"},
{id:7,nombre:"botineSpeedportal $35000",precio:35000,categoria:"botines"},
{id:8,nombre:"botinesPredator $26000",precio:26000,categoria:"botines"},
{id:9,nombre:"botinesGhosted $17000",precio:17000,categoria:"botines"},]

let precioTotalStock1=""
let precioTotalStock2


do {
   tienda = prompt(
      "\n tienda deportiva: \n1 - pantalones  \n2 - remeras  \n3 - botines \n4 - Ordenar por precio descendente \n5 - Ordenar por nombre \n0 para salir o finalizar compra"
   );


   let pantalones;
   let remeras;
   let botines;
   let mostrarPreciodsc;
  let ordenarPrecio=""; 
 productos.sort((a, b) => {
  if (a.precio < b.precio ) {
    return 1
  }
  if (a.precio  > b.precio ) {
    return -1
  }
  return 0
})
productos.forEach(element => {
    ordenarPrecio+=element.id+" "+element.nombre+"\n"
});


let mostrarxNombre;
let ordenarNombre=""; 
productos.sort((a, b) => {
if (a.nombre > b.nombre ) {
  return 1
}
if (a.nombre  < b.nombre ) {
  return -1
}
return 0
})
productos.forEach(element => {
  ordenarNombre+=element.id+" "+element.nombre+"\n"
});

 
   
   
   if (tienda == 1) {
      while (pantalones != 0) {
         pantalones = prompt(
            "\n escriba el numero de la izquierda para comprar ese producto: \n1 - pantalon de Independiente $4500\n2 - pantalon de River Plate $5500\n3 - pantalon de Boca Juniors $6000\n0 - para salir del catalogo"
         );
         pantalon(pantalones,productos,1,2,3);
      }
   }
   if (tienda == 2) {
      while (remeras != 0) {
         remeras = prompt(
            "\n escriba el numero de la izquierda para comprar ese producto: \n4 - Camiseta de independiente $12000\n5 - Camiseta de River Plate $10000\n6 - Camiseta de Boca Juniors $13000\n0 - para salir del catalogo"
         );
         remera(remeras, productos,4,5,6);
      }
   }
   if (tienda == 3) {
      while (botines != 0) {
         botines = prompt(
            "\n escriba el numero de la izquierda para comprar ese producto: \n7 - Botines adidas X Speedportal.3 Fg $35000\n8 - Botines adidas Predator Edge.4 Tf $26000\n9 - Botines adidas X Ghosted.3 TF $17000\n0 - para salir del catalogo"
         );
         botin(botines,productos,7,8,9);
      }
   }

   if (tienda == 4) {
      while (mostrarPreciodsc != 0) {
         mostrarPreciodsc=prompt("escriba el numero de la izquierda para comprar ese producto:"+"\n"+ordenarPrecio)
         botin(mostrarPreciodsc,productos,7,8,9);
        remera(mostrarPreciodsc,productos,6,4,5);
         pantalon(mostrarPreciodsc, productos,3,2,1);
      }
   }

   if (tienda == 5) {
      while (mostrarxNombre != 0) {
         mostrarxNombre=prompt("escriba el numero de la izquierda para comprar ese producto:"+"\n"+ordenarNombre)
         botin(mostrarxNombre,productos,7,9,8);
         pantalon(mostrarxNombre, productos,3,1,2);
        remera(mostrarxNombre,productos,6,4,5);
         
      }
   }
   tiendas();
} while (tienda != 0);


// FUNCIONES---------------------------------------------------------------

function tiendas() {
   if (tienda == 0 && carrito.find(carro=>carro.precio != 0)) {
      carrito.forEach(carro => {
         precioTotalStock1+="\n"+ carro.nombre
      });
     alert(precioTotalStock1)
     alert(`El total a pagar es:$${precioTotalStock2=carrito.reduce((acum, prod) => acum + prod.precio, 0)}`)
   } else if ( carrito == 0) {
      alert("vuelva pronto");
   }
}

function pantalon(
   categoria,
   productos,
   a,
   b,
   c,
) {
   if (categoria == a) {
      carrito.push(productos.find(producto=>producto.id===a))
   } else if (categoria == b) {
      carrito.push(productos.find(producto=>producto.id===b))
   } else if (categoria == c) {
      carrito.push(productos.find(producto=>producto.id===c))
   }
   
}

function remera( categoria,
   productos,
   a,
   b,
   c,) {
   if (categoria == a) {
      carrito.push(productos.find(producto=>producto.id===a))
   } else if (categoria == b) {
      carrito.push(productos.find(producto=>producto.id===b))
   } else if (categoria == c) {
      carrito.push(productos.find(producto=>producto.id===c))
   }
}

function botin( categoria,
   productos,
   a,
   b,
   c,) {
   if ( categoria == a) {
      carrito.push(productos.find(producto=>producto.id===a))
   } else if ( categoria == b) {
      carrito.push(productos.find(producto=>producto.id===b))
   } else if ( categoria == c) {
      carrito.push(productos.find(producto=>producto.id===c))
   }
}