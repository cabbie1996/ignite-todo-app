import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

const routes: Routes = [
  // {
  //   path:"dashboard/contact", component:ContactComponent
  // },
  {
    path:"", component:LoginComponent
  },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "contact", component: ContactComponent },
      { path: "create-contact", component: CreateContactComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
