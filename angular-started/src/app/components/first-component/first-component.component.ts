import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Jailton";

  pessoa = {
    nome:"huguinho",
    idade:32
  }

  constructor() { }

  ngOnInit(): void {
  }
}
