import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  // breadCrumbItems: Array<{}>;

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
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      contact: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      identity: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
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
