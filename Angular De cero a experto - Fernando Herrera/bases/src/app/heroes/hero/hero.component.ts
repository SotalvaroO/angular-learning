import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
})
export class HeroComponent {
  public name: string = 'Iron man';
  public age: number = 36;

  constructor() {}

  public toUpperCase(): string {
    return this.name.toUpperCase();
  }

  public getName(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = 'Spider man';
    this.age = 22;
  }
}
