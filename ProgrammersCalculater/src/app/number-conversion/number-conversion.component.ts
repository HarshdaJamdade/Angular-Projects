import { Component, Optional } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { NgModel } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-number-conversion',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatRadioModule],
  templateUrl: './number-conversion.component.html',
  styleUrl: './number-conversion.component.css'
})
export class NumberConversionComponent implements OnInit {

  uploadform!: FormGroup;

  ngOnInit(): void {
    this.uploadform = new FormGroup
      ({
        option: new FormControl(''),
        option2 : new FormControl(''),
        transNumber: new FormControl(''),
        covertbt : new FormControl('')
      })
  }
  get transNumber() {
    return this.uploadform.get('transNumber');
  }

  
  Result: any
  decimal : any

  constructor(private fb: FormBuilder) {
    this.uploadform = this.fb.group({
      option: [''],
      option2:[''],
      transNumber:['',Validators.required]
    });
  }

  ChecktypeofNumber(No:string):any
  {
    let optionvar : any
    optionvar = this.uploadform.value.option

    if(optionvar === "binary1")
    {
      this.decimal = parseInt(No, 2);
    }
    else if(optionvar === "octal1")
    {
      this.decimal = parseInt(No, 8)
    }
    else if(optionvar === "hex1")
    {
      this.decimal = parseInt(No, 16)
    }
    else if(optionvar === "decimal1")
    {
      this.decimal = parseInt(No, 10);
    }

    this.DecimalConvertto(this.decimal)
  }

  DecimalConvertto(DNo:number)
  {
    let optionvar2 : any
    optionvar2 = this.uploadform.value.option2
   
     if(optionvar2 === "Octal2")
     {
        this.Result = DNo.toString(8);
     }
     else if(optionvar2 === "binary2")
      {
         this.Result = DNo.toString(2);
      }
      else if(optionvar2 === "hex2")
      {
           this.Result = DNo.toString(16);
      }
      else
      {
        this.Result = DNo;
      }
  }
 

  ClearData() {
    this.uploadform.reset();
    this.Result = ''
  }

}





