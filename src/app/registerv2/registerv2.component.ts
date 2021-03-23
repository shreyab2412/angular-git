import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registerv2',
  template: `
    <form #regForm="ngForm" (ngSubmit)="register(regForm)">
      <div>Enter name: <input type="text" required name="name" #name="ngModel" [(ngModel)]=user.name />
        <div *ngIf="name.invalid && (name.dirty ||name.touched)"> 
          <div *ngIf="name.errors.required" style="color:red">Name is required</div>
        </div>
      </div>
     
      <div>Enter Email address: <input type="text" name="email" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" #email="ngModel" [(ngModel)]=user.email/> 
      <div *ngIf="email.invalid && (email.dirty ||email.touched)"> 
          <div *ngIf="email.errors.pattern" style="color:red">Email should be of pattern John@gmail.com</div>
        </div>
      </div>
     
      <div>Enter password: <input type="password" type="password" name="password" #password="ngModel" [(ngModel)]=user.password/> </div>
      <div>Enter city: <input type="text" name="city" #city="ngModel" [(ngModel)]=user.address.city/> </div>
      <div>Enter pincode: <input type="number" name="pincode" #pincode="ngModel" [(ngModel)]=user.address.pincode/> </div>
      <button type="submit">Register</button>
    </form>
    <h4 class="error">{{message}}</h4>
  `,
  styles: [
    '.error{ color:red;}'
  ]
})
export class Registerv2Component  {

  user:User = new User();
  message: string;
  register(f: NgForm){
    if(f.valid)
      console.log(this.user);
    else
      //alert("Please fix all the errors in the form ")
      this.message="Please fix all the errors in the form"
    
  }
}

export class User {
  name: string;
  email: string;
  password: string;
  address: Address = new Address();
}

export class Address{
  city: string;
  pincode: number;
}
