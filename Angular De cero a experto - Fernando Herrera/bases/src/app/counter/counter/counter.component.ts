import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es: {{ base }}</h3>
    <button (click)="acumulate(base)">{{ base }}</button>
    <span> {{ number }} </span>
    <button (click)="acumulate(-base)">-{{ base }}</button>
  `,
})
export class CounterComponent {
  public title: string = 'Contador app';
  public number: number = 10;
  public base: number = 60;

  /* public addToCounter(base: number): void {
    this.number = this.number + base;
  }

  public substractToCounter(base: number): void {
    this.number = this.number - base;
  } */

  public acumulate(base: number): void {
    this.number = this.number + base;
  }
}
