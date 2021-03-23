import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <form #myForm="ngForm" (ngSubmit) ="register(myForm)">
      <label>Name</label>
      <input type="text"  name="t1" #name="ngModel" ngModel required minlength="3" /><br />
      <!--<div *ngIf="name.invalid && (name.dirty ||name.touched)">-->
      <div *ngIf="myForm.submitted && name.invalid">
        <div *ngIf="name.errors.required">Name is required</div>
        <div *ngIf="name.errors.minlength">Name should contain atleast 3 characters</div>
      </div>


      <label>Email</label>
      <input type="email" name="t2" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" #email="ngModel" ngModel /><br />
      <div *ngIf="email.invalid && (email.dirty ||email.touched)">
      <div *ngIf="email.errors.pattern">Email should be of type john@..</div>
      
    </div>

      <label>Password</label>
      <input type="password" name="t3" #password="ngModel" ngModel minlength=4/><br />
      <div *ngIf="password.invalid && (password.dirty || password.touched)">
        <div >Password should be atleast size 4</div>
      </div>
      <label>City</label>
      <input type="text" name="t4" #city="ngModel" ngModel/><br />
      <label>Pincode</label>
      <input type="number" name="t5" #pincode="ngModel" ngModel pattern="^[1-9][0-9]{5}$"/><br />
      <div *ngIf="pincode.invalid && (pincode.dirty || pincode.touched)">
        <div *ngIf="pincode.errors.pattern">Invalid Pincode</div>
      </div>
      <button type="submit" >Register </button>
    </form>
  `,
  styles: [
  ]
})
export class RegisterComponent {
  register(myForm: NgForm){
    console.log(myForm); //Object.prototype.toString.call(myForm); to understand the type of myForm
    console.log(myForm.value);
  }

}
