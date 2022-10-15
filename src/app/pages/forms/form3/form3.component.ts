import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {
  CarType: Array<any> = [
    { name: 'Nissan', value: 'Nissan' },
    { name: 'Station', value: 'Station' },
    { name: 'SUV Turbo', value: 'SUV Turbo' },
    { name: 'Salon Turbo', value: 'Salon Turbo' },
  ];

  validationforms: FormGroup;
  submit = false;
  payment_method_selected = false;
  constructor(public formBuilder: FormBuilder) {
    // submit: boolean;
    // this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Validation', active: true }];

    this.validationforms = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      identity: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      country: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]+')]],

      category: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      club: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      model: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      manufacturing: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],

      subCategory: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],

      participantName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      emergency: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],

      participantNotes: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      emergencyNum: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      undersigned: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      vehicle: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],

      checkArray: this.formBuilder.array([], [Validators.required]),


    });
  }
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  ngOnInit(): void {


  }

  validSubmit() {
    this.submit = true;
    console.log(this.validationforms.value);

  }

  get form(): any {
    return this.validationforms.controls;
  }

  save() {
    console.log(this.validationforms.value);
  }

}

