import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  // breadCrumbItems: Array<{}>;

  validationforms: FormGroup;
    submit= false;
    payment_method_selected=false;
  constructor(public formBuilder: FormBuilder) {
    // submit: boolean;
    // this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Validation', active: true }];

    this.validationforms = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      contact: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      identity: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      country: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      address: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      category: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      club: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      model: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      participantName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      emergency: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      
      needHotel: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      needCar: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      needkalosa: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      needrv: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],

      myCheckboxGroup: new FormGroup({
        carType1: new FormControl(false),
        carType2: new FormControl(false),
        carType3: new FormControl(false),
        carType4: new FormControl(false),
      }, requireCheckboxesToBeCheckedValidator()),
      

    });
   }

  ngOnInit(): void {
   

  }
  
  validSubmit() {
    this.submit = true;
    console.log(this.validationforms.value);

  }

  get form():any {
    return this.validationforms.controls;
  }

  save(){
    console.log(this.validationforms.value);
  }

}

export function requireCheckboxesToBeCheckedValidator(minRequired = 1): any {
  return function validate (formGroup: FormGroup) {
    let checked = 0;

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];

      if (control.value === true) {
        checked ++;
      }
    });

    if (checked < minRequired) {
      return {
        requireOneCheckboxToBeChecked: true,
      };
    }

    return null;
  };
}