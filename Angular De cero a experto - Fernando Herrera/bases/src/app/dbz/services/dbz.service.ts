import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    { name: 'Gohan', power: 2000 },
    { name: 'Piccolo', power: 15000 },
  ];

  constructor() {}

  public get characters(): Character[] {
    return [...this._characters]; //El spread en este caso lo que hace es romper la referencia con el attributo origen, sin esto modifica el original
  }

  public addCharacters(character: Character) {
    this._characters.push(character);
  }
}
