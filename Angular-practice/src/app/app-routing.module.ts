import { NameComponent } from './contact/name/name.component';
import { ApplicationModule, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  {
//   path: "name",
//   component: NameComponent
//  } ,
//  {
//   path: "",
//   component: NameComponent
//  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
