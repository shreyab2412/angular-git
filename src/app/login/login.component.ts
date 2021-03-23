import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit) ="login()">
      Enter Username: <input type="text" name="t1" [(ngModel)]=username />
      Enter Password: <input type="text" name="t2" [(ngModel)]=password />
      <button type="submit">Login</button>
    </form>
    <h4 >{{message}}</h4>
  `,
  styles: [
    `h4{
      color:red;
    }`
  ]
})
export class LoginComponent  {

  username: string;
  password: string;
  message: string;
  login(){
    if(this.username == 'shreya' && this.password == '123')
      this.message='Login Successful!!';
    else
      this.message="**Invalid Username or Password....Please check again**"
  }
}
