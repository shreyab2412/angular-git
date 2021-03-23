import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-event',
  template: `
    <p>
      button-event works!
    </p>
    
    Enter name: <input type="text" [(ngModel)]="msg"/><br />
    <button (click)="onChange()">Click Me</button>
    <h4 *ngIf="msg1">Hello {{msg1}}</h4>
  `,
  styles: [
  ]
})
export class ButtonEventComponent  {
  msg1:string;
 msg:string ;
 onChange(){
   this.msg1=this.msg;
 }

}
