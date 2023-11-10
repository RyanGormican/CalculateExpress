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
  doCalc() {
    let result = eval(this.inputStr.controls.text.value)
      this.inputStr.controls.text.setValue(result)
  }
    deleteLast() {
    let str = this.inputStr.controls.text.value
    str = str.slice(0,-1)
      this.inputStr.controls.text.setValue(str)
  }
  calculateSquareRoot() {
    let value = parseFloat(this.inputStr.controls.text.value);
    if (!isNaN(value)) {
      this.inputStr.controls.text.setValue(Math.sqrt(value));
    }
  }
  toggle() {
  let value = parseFloat(this.inputStr.controls.text.value);
    if (!isNaN(value)) {
      this.inputStr.controls.text.setValue(-value);
    }
    }
   calculatePercent() {
     let value = parseFloat(this.inputStr.controls.text.value);
      if (!isNaN(value)) {
      this.inputStr.controls.text.setValue(value/100);
    }
   
  }
}
