import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


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
import { LandingNavbarComponent } from './landing/landing-navbar/landing-navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent},
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'events/:id', component: EventsComponent },
  { path: '**', component: PageNotFoundComponent }
];

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
    NavBarComponent,
    LandingNavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
