import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
val:string =""
fruit=[]
add(){
  // this.status=!this.status
  this.fruit.push(this.val)
}

//    val
//  fruit=["hello"];
// additems(){
//  this.fruit.push(this.val);
}
