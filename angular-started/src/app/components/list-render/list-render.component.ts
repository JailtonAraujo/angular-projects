import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name:"Reginaldo", type:"cat", age:2},
    {name:"Fofo", type:"dog", age:3},
    {name:"loro", type:"Papagaio", age:10},
    {name:"susana", type:"Horse", age:12}
  ]

  animalsDatails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalsDatails = `O pet ${animal.name} tem ${animal.age} anos!`
  }
  
}
