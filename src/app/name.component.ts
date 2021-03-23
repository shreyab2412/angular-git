import { Component } from "@angular/core";


@Component({
    selector: 'name',
    template: `
        <div class="{{style}}">My name is Angular</div>
        <button (click)="changecolor()">Click me </button>
    `,
    styles:[
       
       ' .before{font-weight : bold; color:green; }',
        '.after{ color:blue;  }'
        
        
    ]

})


export class NameComponent{
    style : string ="before";
    changecolor(){
        this.style= "before after";
    }
} 