import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildapp';
  enterName="Maria";
  enterData="george"
  parentData="";
  parentData1="";
  

  transferData(){
    this.parentData=this.enterName;
    this.parentData1=this.enterData;
    
  }
  value="";
  sendData(value:string){
    this.value=value;
  }
  

}
