import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <div>
    <button  
      [ngClass]="{'like-button':true,'liked':isLiked}"
      (click)="like()" >
      Like| <span class="likes-counter">{{counter}}</span>
    </button>
    </div> `
    ,
  styles: [`
    .like-button{
      font-size:1rem;
      padding:5px 10px;
      color: red;
    }
    .liked{
      font-weight:bold;
      color:green;
    }
  `

  ]
})
export class ButtonComponent  {

 counter:number = 100;
 isLiked:boolean = false;

 like(){
   if(this.isLiked){
    this.counter--;
    this.isLiked=false;
   }
   else{
     this.counter++;
     this.isLiked=true;
   }
   
   
 }
 
}
