import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'HomelanderxD'];
  lastDeletedhero: string = '';

  constructor() {}

  public deleteHero(): void {
    this.lastDeletedhero = this.heroes.pop() || ''; //Importantisimo ese encadenamiento
  }

  public getCurretDeletedHero(): string {
    return this.lastDeletedhero;
  }


}
