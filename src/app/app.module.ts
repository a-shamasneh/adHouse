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
import { HomeComponent } from './home/home.component';
import { GetaddService } from './getadd.service';

const ROUTES = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'Adds',
    component: AdvertsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdvertsComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AddservService,GetaddService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
