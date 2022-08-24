//Encadenamiento opcional

interface Pasajero {
  name: string;
  hijos?: number[];
}

const pasajero: Pasajero = {
  name: "juan",
};

console.log(pasajero.hijos?.length | 0);
