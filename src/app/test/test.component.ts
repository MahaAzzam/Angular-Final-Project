import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  btnClicked = false;
  elementsArray =[
    {name:'ahmed' , age:24},
    {name:'ahmed' , age:25},
    {name:'ahmed' , age:26},
    {name:'ahmed' , age:27}
  ]
  // inputText : string;
  // inputText2 : string;
  // btnDisabled = false;
  constructor() {
    // setTimeout(()=>{
    //   this.btnDisabled = true;
    // },3000)
   }

  ngOnInit(): void {
  }

  // onButtonClicked():void{
  //   alert('btn clicked');
  // }

  // onInputCahnge(e):void{
  //   this.inputText= e.target.value;
  // }

  onButtonClicked():void{
    this.btnClicked = !this.btnClicked;
  }

  getColor():string{
    return this.btnClicked? 'green':'red';
  }

}
