import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  someText = "Testando o pipe Operator";

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
