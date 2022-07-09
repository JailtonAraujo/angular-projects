import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestmoduleComponent } from './testmodule.component';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@NgModule({
  declarations: [
    TestmoduleComponent
  ],

  exports:[
    TestmoduleComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TestmoduleModule { }
