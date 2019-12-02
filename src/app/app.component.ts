import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  val = parseInt((<HTMLInputElement>document.getElementById("naresh")).value)
  msg="";
  Addition(){
    this.msg=""
    this.val+=1
  }
  Subtract(){
    if(this.val==0){
      this.msg="value reached to 0";
    }
    else{
    this.val-=1;
  }
}
}
