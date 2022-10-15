import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutComponent } from './layouts/users-layout/users-layout.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/layouts/users-layout/user-layout.module').then(m => m.UserLayoutModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
