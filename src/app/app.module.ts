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

const ROUTES = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AddservService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
