import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
   <button 
    [ngClass]="{'like-button':true,'liked':isLiked}"
    (click)="like()">
    Like | <span class="likes-counter">{{likes}}</span>
  </button>

  <button
    [ngClass]="{'dislike-button':true,'disliked':isDisLiked}" 
    (click)="dislike()">
    Dislike | <span class="dislikes-counter">{{dislikes}}</span>
  </button>
  `,
  styles: [
    `
  .like-button, .dislike-button {
    font-size: 1rem;
    padding: 5px 10px;
    color:   #585858;
  }

  .liked, .disliked {
    font-weight: bold;
    color: #1565c0;
  }
    `
  ]
})
export class SimpleComponent {
  likes:number = 100;
  dislikes:number=25;
  isLiked:boolean=false;
  isDisLiked:boolean=false;

  like(){
    if(this.isLiked){
      this.likes--;
      this.isLiked=false;
    }
    else{
      this.likes++;
      this.isLiked=true;
      if(this.isDisLiked){
        this.dislikes--;
        this.isDisLiked=false;
      }
    }
  }
  dislike(){
    if(this.isDisLiked){
      this.dislikes--;
      this.isDisLiked=false;

    }
    else{
      this.dislikes++;
      this.isDisLiked=true;
      if(this.isLiked){
        this.likes--;
        this.isLiked=false;
      }
    }

  }


 
}
