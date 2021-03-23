import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    <form >
      Enter a: <input type="number" name="a" [(ngModel)]=a /><br />
      Enter b: <input type="number" name="b" [(ngModel)]=b /><br />
      <button (click)="Add()">Add</button><br/>
      <button (click) = "Subtract()">Subtract</button>
    </form>
    <p *ngIf="c">Addition is {{c}}</p>
    <p *ngIf="d">Subtraction is {{d}}</p>
  `,
  styles: [
  ]
})
export class CalculatorComponent {
  a: number;
  b: number;
  c: number;
  d: number;
  Add(){
    this.c=this.a + this.b;
  }
  Subtract(){
    this.d=this.a - this.b;
  }

}
