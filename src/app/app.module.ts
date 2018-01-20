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

import { AuthGuardGuard } from './auth-guard.guard';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent},
  { path: 'about', component: AboutComponent},
  { path: 'tech', component: TechComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardGuard]},
  { path: 'events/:id', component: EventsComponent, canActivate: [AuthGuardGuard] },
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
  providers: [AuthService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
