import { Routes } from '@angular/router';
import { Form1Component } from 'src/app/pages/forms/form1/form1.component';
import { Form2Component } from 'src/app/pages/forms/form2/form2.component';
import { Form3Component } from 'src/app/pages/forms/form3/form3.component';
import { FormsComponent } from 'src/app/pages/forms/forms.component';


export const UserLayoutRoutes: Routes = [
    { path: '', component: FormsComponent, },
    { path: 'form1', component: Form1Component },
    { path: 'form2', component: Form2Component },

    { path: 'form3', component: Form3Component },

 ]
