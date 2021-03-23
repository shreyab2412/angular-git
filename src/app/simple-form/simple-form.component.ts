import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <form (ngSubmit) = "doSomething()">
    Enter your name : <input type="text"name="t1" [(ngModel)]=name /><br />
    Enter your Date of Birth :<input type="date" name="t2" [(ngModel)]=dob /><br />
    <button type="submit">Submit</button>
    </form>
    <div *ngIf="name && dob" >
    Hello {{name}} your dob is {{dob}} using if condition together
    </div>
  `,
  styles: [
  ]
})
export class SimpleFormComponent  {
  
  name: string; //we want whatever user enters in the text field to be stored here
  dob: Date;
  doSomething(){
    
    //alert(this.name+" "+this.dob);
    this.name = this.name.toUpperCase();
  }
 

}
