import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './landing/about/about.component';
import { TechComponent } from './landing/tech/tech.component';
import { LoginComponent } from './landing/login/login.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { DonationCardComponent } from './components/donation-card/donation-card.component';
import { OrganizationCardComponent } from './components/organization-card/organization-card.component';
import { NavBarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    TechComponent,
    LoginComponent,
    HomeComponent,
    EventsComponent,
    ProfileComponent,
    EventCardComponent,
    DonationCardComponent,
    OrganizationCardComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
