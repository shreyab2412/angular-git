import { Component } from "@angular/core";

@Component({
    selector: 'hello',
    template: `<h1>Hello Everyone</h1>
    <form (ngSubmit)="view()">
        Enter name: <input type="text" name="name" [(ngModel)]=enteredname/> <br/>
        <button >Click</button>
        <h3 *ngIf="msg">You Entered {{msg}}</h3>
    </form>
    `
})

export class HelloComponent {
    enteredname:string ;
    msg: string;
    view(){
        this.msg=this.enteredname;
        
    }


}