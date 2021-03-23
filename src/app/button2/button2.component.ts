import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button2',
  template: `
    
    <h4>Button 2<h4>
      <button 
        [ngClass] = "{'like-button':true,'liked':isLiked}"
        (click)="like()">
        Like|<span class="like-counter">{{likes}}</span>
      </button>

      <button 
        [ngClass] = "{'dislike-button':true,'disliked':isDisliked}"
        (click)="dislike()">
        Like|<span class="like-counter">{{dislikes}}</span>
      </button>
    
  `,
  styles: [`
  .like-button, .dislike-button {
    font-size: 1rem;
    padding: 5px 10px;
    color:   #585858;
  }

  .liked, .disliked {
    font-weight: bold;
    color: #1565c0;
  }
    `]
  
})
export class Button2Component  {

  likes:number=100;
  dislikes:number=25;
  isLiked:boolean=false;
  isDisliked:boolean=false;
  like(){
    if(this.isLiked){
      this.likes--;
      this.isLiked=false;
    }
    else{
      this.likes++;
      this.isLiked=true;
      if(this.isDisliked){
        this.dislikes--;
        this.isDisliked=false;
      }
    }
  }
  dislike(){
    if(this.isDisliked){
      this.dislikes--;
      this.isDisliked=false;

    }
    else{
      this.dislikes++;
      this.isDisliked=true;
      if(this.isLiked){
        this.likes--;
        this.isLiked=false;
      }
    }
  }

}
