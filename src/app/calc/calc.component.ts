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
  calculateTrig(func: string) {
    let value = parseFloat(this.inputStr.controls.text.value);
      if (!isNaN(value)) {
    switch (func) {
      case 'sin':
        this.inputStr.controls.text.setValue(Math.sin(value));
        break;
      case 'cos':
        this.inputStr.controls.text.setValue(Math.cos(value));
        break;
      case 'tan':
        this.inputStr.controls.text.setValue(Math.tan(value));
        break;
      case 'asin':
        this.inputStr.controls.text.setValue(Math.asin(value));
        break;
      case 'acos':
        this.inputStr.controls.text.setValue(Math.acos(value));
        break;
      case 'atan':
        this.inputStr.controls.text.setValue(Math.atan(value));
        break;
      default:
        break;
    }
    }
    }
    
  calculateExponential() {
    let value = parseFloat(this.inputStr.controls.text.value);
      if (!isNaN(value)) {
    this.inputStr.controls.text.setValue(Math.exp(value));
    }
  }
   calculateLogarithm() {
    let value = parseFloat(this.inputStr.controls.text.value);
    if (value > 0) {
      this.inputStr.controls.text.setValue(Math.log(value));
    } else {
  
    }
  }

   calculateSquare() {
    let value = parseFloat(this.inputStr.controls.text.value);
        if (!isNaN(value)) {
    this.inputStr.controls.text.setValue(Math.pow(value, 2));
    }
  }

  calculateCube() {
    let value = parseFloat(this.inputStr.controls.text.value);
        if (!isNaN(value)) {
    this.inputStr.controls.text.setValue(Math.pow(value, 3));
    }
  }
calculateFactorial() {
  let value = parseFloat(this.inputStr.controls.text.value);
  if (!isNaN(value) && Number.isInteger(value) && value >= 0) {
    this.inputStr.controls.text.setValue(this.factorial(value));
  } else {
  }
}
factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * this.factorial(n - 1);
}
insertConstant(constant: string) {
  switch (constant) {
    case 'pi':
    if(this.inputStr.controls.text.value!= null){
   this.inputStr.controls.text.setValue(this.inputStr.controls.text.value + Math.PI);
    }else
    {
     this.inputStr.controls.text.setValue(Math.PI);
    }
     
      break;
    case 'e':
      if(this.inputStr.controls.text.value!= null){
   this.inputStr.controls.text.setValue(this.inputStr.controls.text.value + Math.E);
    }else
    {
     this.inputStr.controls.text.setValue(Math.E);
    }
      break;
      }
      }
}
