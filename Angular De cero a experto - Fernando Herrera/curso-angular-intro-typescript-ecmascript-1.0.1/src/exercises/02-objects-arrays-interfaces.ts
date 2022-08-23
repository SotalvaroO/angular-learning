//Objetos

const dummyObject = {
  id: 1,
  name: "attr name",
};

console.log(dummyObject);

//Arrays

const numbersArray: number[] = [1, 2, 3, 4];

console.log(numbersArray);

//aunque sea const, al agregarle un elemento no se está modificando sino que se está extendiendo

numbersArray.push(3);
console.log(numbersArray);

// Array de varios tipos

const numbersArrayMultiType: (number | string)[] = [1, 2, "tres", 4];

console.log(numbersArrayMultiType);

//Interfaz (esta es como una clase pero tonta)

export interface DummyObject {
  id: number;
  name: string;
  showName: () => void;
}

export const dummyFromInterface: DummyObject = {
  id: 1,
  name: "Objeto desde interfaz",
  showName() {
    console.log(this.name);
  },
};

console.log(dummyFromInterface);
