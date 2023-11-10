import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }
  inputStr: any
  ngOnInit(): void {
  this.inputStr = new FormGroup({
    text : new FormControl()
  })
  }

}
