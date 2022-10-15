import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from '../pages.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';
import { Form1Component } from './form1/form1.component';




@NgModule({
  declarations: [
  
    Form1Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
  ]
})
export class FormModule { }
