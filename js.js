




let tienda;
let resultadoRemera = "";
let resultadoPantalon = "";
let resultadoBotines = "";
let totalRemera = 0;
let totalPantalon = 0;
let totalBotines = 0;

do {
   tienda = prompt(
      "\n tienda deportiva: \n1 - pantalones  \n2 - remeras  \n3 - botines \n0 para salir o finalizar compra"
   );
   let pantalones;
   let remeras;
   let botines;
   let pantalonIndependiente = 4500;
   let pantalonRiver = 5500;
   let pantalonBoca = 6000;
   let remeraIndependiente = 12000;
   let remeraRiver = 10000;
   let remeraBoca = 13000;
   let botineSpeedportal = 35000;
   let botinesPredator = 26000;
   let botinesGhosted = 17000;
   if (tienda == 1) {
      while (pantalones != 0) {
         pantalones = prompt(
            "\n nuestros pantalones: \n1 - pantalon de Independiente $4500\n2 - pantalon de River Plate $5500\n3 - pantalon de Boca Juniors $6000\n0 - para salir del catalogo"
         );
         pantalon(pantalones, pantalonRiver, pantalonIndependiente, pantalonBoca);
      }
   }
   if (tienda == 2) {
      while (remeras != 0) {
         remeras = prompt(
            "\n nuestras remeras: \n1 - Camiseta de independiente $12000\n2 - Camiseta de River Plate $10000\n3 - Camiseta de Boca Juniors $13000\n0 - para salir del catalogo"
         );
         remera(remeras, remeraIndependiente, remeraRiver, remeraBoca);
      }
   }
   if (tienda == 3) {
      while (botines != 0) {
         botines = prompt(
            "\n nuestros botines: \n1 - Botines adidas X Speedportal.3 Fg $35000\n2 - Botines adidas Predator Edge.4 Tf $26000\n3 - Botines adidas X Ghosted.3 TF $17000\n0 - para salir del catalogo"
         );
         botin(botines, botineSpeedportal, botinesPredator, botinesGhosted);
      }
   }
   tiendas();
} while (tienda != 0);


// FUNCIONES---------------------------------------------------------------

function tiendas() {
   if (tienda == 0 && totalPantalon + totalRemera + totalBotines != 0) {
      alert(`${resultadoRemera + resultadoPantalon + resultadoBotines}`);
      alert(`el total es:$${totalPantalon + totalRemera + totalBotines}`);
   } else if (totalPantalon + totalRemera + totalBotines == 0) {
      alert("vuelva pronto");
   }
}

function pantalon(
   pantalones,
   pantalonRiver,
   pantalonIndependiente,
   pantalonBoca
) {
   if (pantalones == 1) {
      resultadoPantalon += "pantalon Independiente $4500" + "\n";
      totalPantalon += pantalonIndependiente;
   } else if (pantalones == 2) {
      resultadoPantalon += "pantalon River Plate $5500" + "\n";
      totalPantalon += pantalonRiver;
   } else if (pantalones == 3) {
      resultadoPantalon += "pantalon Boca Juniors $6000" + "\n";
      totalPantalon += pantalonBoca;
   }
}

function remera(remeras, remeraIndependiente, remeraRiver, remeraBoca) {
   if (remeras == 1) {
      resultadoRemera += "Camiseta puma Independiente $12000" + "\n";
      totalRemera += remeraIndependiente;
   } else if (remeras == 2) {
      resultadoRemera += "Camiseta adidas River Plate $10000" + "\n";
      totalRemera += remeraRiver;
   } else if (remeras == 3) {
      resultadoRemera += "Camiseta adidas Boca Juniors $13000" + "\n";
      totalRemera += remeraBoca;
   }
}

function botin(botines, botineSpeedportal, botinesPredator, botinesGhosted) {
   if (botines == 1) {
      resultadoBotines += "Botines adidas X Speedportal.3 Fg $35000" + "\n";
      totalBotines += botineSpeedportal;
   } else if (botines == 2) {
      resultadoBotines += "Botines adidas Predator Edge.4 Tf $26000" + "\n";
      totalBotines += botinesPredator;
   } else if (botines == 3) {
      resultadoBotines += "Botines adidas X Ghosted.3 TF $17000" + "\n";
      totalBotines += botinesGhosted;
   }
}