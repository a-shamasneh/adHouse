import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { FooterComponent } from './footer/footer.component';
import { AddservService } from './addserv.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { GetaddService } from './getadd.service'
import { HomeComponent } from './home/home.component';

<<<<<<< HEAD
=======

import { AdminComponent } from './admin/admin.component';





>>>>>>> b0bdbf29ac8148f36286c6c14ff853789f08d083

import { ProfileComponent } from './profile/profile.component';
import { userDataService } from './userdata.service';







const ROUTES = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'Adds',
    
    component: AdvertsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdvertsComponent,
    FooterComponent,

    LoginComponent,
    SignupComponent,

    HomeComponent,


    AdminComponent,

    ProfileComponent


    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
            prefix: 'app-root',
            storageType: 'localStorage',
        }),
    RouterModule.forRoot(ROUTES)
  ],


  providers: [AddservService,GetaddService,userDataService,{ provide: LocationStrategy, useClass: HashLocationStrategy }, AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
