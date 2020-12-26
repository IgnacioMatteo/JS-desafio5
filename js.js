/*Marcas de celulares*/

function Samsung (modelo, pantalla, memoria, procesador, camara, so) {
    this.modelo = modelo;
    this.pantalla = pantalla;
    this.memoria = memoria;
    this.procesador = procesador;
    this.camara = camara;
    this.so= so;

    this.mostrarInfo = function () {
        console.log(`Este producto es: ${this.modelo} y tiene un sistema operativo ${this.so}`);
    }
}

const samsung1 = new Samsung ("Galaxy A01 Core", 5.3, "16 GB", "Quad-core 1.5", "8 MP", "Android 10 (Go)")
const samsung2 = new Samsung ("Galaxy Note 10", 6.3, "256 GB", "Octa Core 2,7GHz,2.3GHz,1.9GHz", "12 MP + 12 MP + 16 MP", "Android 9 Pie")
const samsung3 = new Samsung ("Galaxy Z Fold 2", 7.6, "256 GB", "Octa Core 3.0", "12 MP + 12 MP + 12 MP", "Android 10")
const samsung4 = new Samsung ("Galaxy A71", 6.7, "128 GB", "Octa Core 2.3", "64 MP + 12 MP + 5 MP + 5 MP", "Android 10")



samsung1.mostrarInfo();
console.log(samsung2);
samsung3.mostrarInfo();
samsung4.mostrarInfo();
