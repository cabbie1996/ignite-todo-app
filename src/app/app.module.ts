import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiServiceService } from './api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    DashboardComponent,
    EditContactComponent,
    CreateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    ApiServiceService,
  ],
  entryComponents: [
    EditContactComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
