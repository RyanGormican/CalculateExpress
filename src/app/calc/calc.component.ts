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
  buttonClick(buttonElement: any) {

    let buttonText = buttonElement.textContent
    if(this.inputStr.controls.text.value!= null){
      this.inputStr.controls.text.setValue(
    this.inputStr.controls.text.value
    +buttonText)
    }else
    {
      this.inputStr.controls.text.setValue(
   buttonText)
    }
  }
  clearCalc() {
  this.inputStr.controls.text.setValue("")
  }
}
