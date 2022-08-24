//Clases

//Si es estatico se puede hacer Heroe.attrStatic sin crear una instancia

class Hero {
  private alterEgo: string;
  private realName: string;
  private age: number;

  public Hero() {}

  public getAlterEgo(): string {
    return this.alterEgo;
  }

  public setAlterEgo(alterEgo: string): void {
    this.alterEgo = alterEgo;
  }
}

const ironMan = new Hero();

ironMan.setAlterEgo("Tony Stark");

console.log(ironMan.getAlterEgo());

//Herencia y clases abstractas

class Person {
  constructor(name: string, address: string) {}
}

//TODO: Entender por que putas los parametros de constructor tiene tipo de acceso

class HeroExtend extends Person {
  constructor(alterego: string, age: number, realName: string) {
    super(realName, "new york");
  }
}

const heroExtended: HeroExtend = new HeroExtend("ironman", 34, "Tony Stark");
console.log(heroExtended);
