import { Routes } from '@angular/router';
import { Form1Component } from 'src/app/pages/forms/form1/form1.component';
import { FormsComponent } from 'src/app/pages/forms/forms.component';


export const UserLayoutRoutes: Routes = [
    { path: '', component: FormsComponent, },
    { path: 'form1', component: Form1Component },

 ]
