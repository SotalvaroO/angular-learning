import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  /* @Input('data') */

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  get characters() {
    return this.dbzService.characters;
  }
}
