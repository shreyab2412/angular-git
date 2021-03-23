import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2 class="counter">{{counter}}<h2>
    <button (click)="generate()" class="counter-button">Click</button>
  `,
  styles: [
    `
    .counter-button{
      font-size: 1rem;
      padding:5 px 10px;
      color:red;
    }
    `
    
  ]
})
export class CounterComponent  {
  counter: number = 42;
  generate(){
    this.counter=this.counter+1;
  }
 

}
