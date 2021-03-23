import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LuckyNumberComponent } from './lucky-number.component';
import { NameComponent } from './name.component';
import { SimpleComponent } from './simple/simple.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Registerv2Component } from './registerv2/registerv2.component';
import { CalcComponent } from './calc/calc.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonComponent } from './button/button.component';
import { Button2Component } from './button2/button2.component';
import { ButtonEventComponent } from './button-event/button-event.component';
import { ButtonLikeComponent } from './button-like/button-like.component';
import { PhonebookComponent } from './phonebook/phonebook.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LuckyNumberComponent,
    NameComponent,
    SimpleComponent,
    SimpleFormComponent,
    CalculatorComponent,
    LoginComponent,
    RegisterComponent,
    Registerv2Component,
    CalcComponent,
    CounterComponent,
    ButtonComponent,
    Button2Component,
    ButtonEventComponent,
    ButtonLikeComponent,
    PhonebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
