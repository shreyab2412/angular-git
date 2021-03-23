import { Component } from "@angular/core";

@Component({
    selector: 'lucky-number',
    template: `
    <div class = "{{style}}"> Welcome to Angular.com</div>
        <button (click)="generate()">Click here</button> to reveal your lucky number
        <h1 *ngIf="luckyNumber">Your lucky number is <mark>{{luckyNumber}}</mark></h1>
    `,
    styles:[
        '.info { font-weight : bold; font-size:30px ; color :green; }',
        '.info2{text-shadow :5px 5px 5px red; }'
    ]
})


export class LuckyNumberComponent{
    luckyNumber : number; //you can simply right any number

    style : string = "info";
    generate(){
        this.luckyNumber = Math.ceil(Math.random() * 10);
        this.style="info info2";
    }


}