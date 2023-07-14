import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
   {path:"register",component:RegistrationComponent},
   {path:"search",component:SerachDeleteComponent},
   {path:"view",component:ViewComponent},
   {path:"update/:id",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
