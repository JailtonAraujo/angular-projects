import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent implements OnInit {

  number : number = 0;

  number2 : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
    this.number =  Math.floor(Math.random() * 10);
  }

  onChangeNumber100(){
    this.number2 = Math.floor(Math.random() *100);
  }

}
