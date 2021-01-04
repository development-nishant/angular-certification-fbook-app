import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { NetworkComponent } from './network/network.component';
import { SettingsComponent } from './settings/settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ResetComponent } from './reset/reset.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import {HttpInterceptorService} from './shared/services/http-interceptor.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ForgotpasswordComponent,
    FriendListComponent,
    NetworkComponent,
    SettingsComponent,
    AuthenticationComponent,
    ResetComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorService,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
