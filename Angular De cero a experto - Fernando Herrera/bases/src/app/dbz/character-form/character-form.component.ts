import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css'],
})
export class CharacterFormComponent implements OnInit {
  @Input()
  public character: Character = {
    name: '',
    power: 0,
  };

  /* @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
 */
  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  public add() {
    if (this.character.name.trim().length === 0) return;
    const characterToAdd: Character = {
      name: this.character.name,
      power: this.character.power,
    };
    /* this.onNewCharacter.emit(characterToAdd) */
    this.dbzService.addCharacters(characterToAdd);
    this.character = {
      name: '',
      power: 0,
    };
  }
}
