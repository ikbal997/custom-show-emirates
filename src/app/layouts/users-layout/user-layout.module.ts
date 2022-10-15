import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsComponent } from 'src/app/pages/forms/forms.component';
import { UserLayoutRoutes } from './user-layout-routing';
import { SharedModule } from 'src/app/shared.module';
import { Form1Component } from 'src/app/pages/forms/form1/form1.component';
import { Form2Component } from 'src/app/pages/forms/form2/form2.component';
import { Form3Component } from 'src/app/pages/forms/form3/form3.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    // NgbModule
    SharedModule,
    
  ],
  declarations: [
    FormsComponent,
    Form1Component,
    Form2Component,
    Form3Component
  ]
})
export class UserLayoutModule { }
