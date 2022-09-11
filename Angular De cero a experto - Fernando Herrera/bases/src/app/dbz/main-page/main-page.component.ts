import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public character: Character = {
    name: 'Trunks',
    power: 14500,
  };

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

/*   public get characters(): Character[] {
    return this.characters;
  } */

  
}
