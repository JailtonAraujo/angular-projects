import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string = "Fabinho";

  object = {
    sobrenome: "Santana",
    idade: 10,
    logradouro:"euclides"
  };

  title = 'angular-started';
}
