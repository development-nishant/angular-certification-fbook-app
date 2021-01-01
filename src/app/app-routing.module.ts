import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SettingsComponent } from './settings/settings.component';
import { ResetComponent } from './reset/reset.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {MainComponent} from './main/main.component';

// @ts-ignore
// @ts-ignore
const routes: Routes = [

  { path: '', component: AuthenticationComponent,children:[
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegistrationComponent},
      {path: 'forgotpass', component: ForgotpasswordComponent},
      {path: 'reset', component: ResetComponent}]
  },
  {path: 'main', component: MainComponent,children:[
      {path: 'home', component: HomeComponent},
      {path: 'network', component: NetworkComponent},
      {path: 'friends', component: FriendListComponent},
      {path: 'settings', component: SettingsComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
