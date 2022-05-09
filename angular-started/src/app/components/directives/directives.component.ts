import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  fonte = 'arial';
  size = 40;
  color = 'red';
  classes = ['greenm-title','small-title'];
  underline = 'underline-class';

  constructor() { }

  ngOnInit(): void {
  }

}
