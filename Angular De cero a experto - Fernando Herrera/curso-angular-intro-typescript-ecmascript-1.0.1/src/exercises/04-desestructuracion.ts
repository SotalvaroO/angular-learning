import { DummyObject } from './02-objects-arrays-interfaces';
//Desestructuración de objetos


const dummyFromInterface: DummyObject = {
  id: 1,
  name: "Juan",
  showName() {
    console.log("hi!");
  },
};

const dummies: DummyObject[] = [dummyFromInterface];

//La funcion se desestructura sin parentesis, pero si se invoca con parentesis
const { id, name, showName } = dummyFromInterface;

console.log(id);
console.log(name);
showName();

//Desestructuracion de arreglos

const dummyArr: string[] = ["Java", "Goku", "Python", "Vegeta"];

const [uno, , , cuatro] = dummyArr;

//El nombre no importa, importa es la posición

console.log(uno);
console.log(cuatro);

const getNum = (): number => 1;

const dummyArray: number[] = [1, 2, getNum()];

const [a, b, c] = dummyArray;

console.log(c);

//No importa si es funcion pa obtener un valor

const addParameters = (dummyFromInterface: DummyObject[]): number => {
  let total: number = 0;
  dummyFromInterface.forEach((element) => {
    total++;
    console.log(element.name);
  });
  return total*50;
};

console.log(addParameters(dummies));
