import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() btnText!:string;

  personform!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.personform = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  get name(){
    return this.personform.get('name')!;
  }

  get login(){
    return this.personform.get('login')!;
  }

  get senha(){
    return this.personform.get('senha')!;
  }

  submit(){
    if(this.personform.invalid){
      return;
    }
  }

}
