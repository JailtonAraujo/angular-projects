import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/pessoa';

@Component({
  selector: 'app-testmodule',
  templateUrl: './testmodule.component.html',
  styleUrls: ['./testmodule.component.css']
})
export class TestmoduleComponent implements OnInit {

  pes?:Pessoa;

  pessoa={name:"", age:""}

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.pessoa);
  }

  testChane(event:Event){
    const targe = event.target as HTMLInputElement;
    console.log(targe.value);
  }

}
