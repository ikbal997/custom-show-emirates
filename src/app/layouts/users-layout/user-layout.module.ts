import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormsComponent } from 'src/app/pages/forms/forms.component';
import { UserLayoutRoutes } from './user-layout-routing';
import { SharedModule } from 'src/app/shared.module';
import { Form1Component } from 'src/app/pages/forms/form1/form1.component';
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
    Form1Component
  ]
})
export class UserLayoutModule { }
