import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
val:string =""
val2:number=0
fruit=[]
additems(){
   this.fruit.push(this.val+"   "+this.val2+"Rs")
}
}
