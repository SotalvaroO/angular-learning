import { dummyFromInterface, DummyObject } from './02-objects-arrays-interfaces';  
//Funcion clasica de Javascript

function sumar(a, b) {
  return a + b;
}

//Funcion con el metodo arroy

const sumarArrow = (a, b) => a + b;

console.log(sumar(1, 2));
console.log(sumarArrow(2, 3));

//Especificar el tipado en todo momento

const multiplicar = (a: number, b: number): number => {
  return a * b;
};

console.log(multiplicar(5, 5));

//Parametros por defecto y opcionales (Primero los obligatorios luego los opcionales)

const multiplicarParametros = (
  a: number,
  b: number,
  c?: number,
  d: number = 10
): number => {
  if (c != null) {
    return a * b * c * d;
  }
  return a * b * d;
};

console.log(multiplicarParametros(2, 2, 3, 3));

//Funciones con objetos como argumentos

const changeName = (dummyObject: DummyObject): void => {
  dummyObject.name = "El de siempre";
  dummyObject.showName = ()=>console.log("first")
};

console.log(dummyFromInterface);

changeName(dummyFromInterface);

console.log(dummyFromInterface.showName());
