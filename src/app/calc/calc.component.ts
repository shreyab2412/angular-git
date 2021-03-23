import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
    Enter number1 : <input type="number" #no1 /> <br />
    Enter number2 : <input type="number" #no2 /> <br />
    <button (click)="calc('+', no1.value, no2.value)">Add</button>
    <button (click)="calc('-', no1.value, no2.value)">Subtract</button>
    <br />
    {{ result }}
  `,
  styles: [
  ]
})
export class CalcComponent  {

  result: number;

    calc(op: string, no1: number, no2: number) {
        if(op == '+')
            this.result = Number(no1) + Number(no2);
        else if(op == '-')
            this.result = Number(no1) - Number(no2);
    }

}


