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
import { MainComponent } from './main/main.component';

import { AuthGuardGuard } from './auth-guard.guard';
import { AuthService } from './auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'about', component: AboutComponent},
  { path: 'tech', component: TechComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardGuard]},
  { path: 'events/:id', component: EventsComponent, canActivate: [AuthGuardGuard] },
  { path: '**', component: PageNotFoundComponent }
];

const firebaseConfig = {
  apiKey: 'AIzaSyDTBSJ0TYQvronrhwPZ7sQHrNLShZFgDQY',
  authDomain: 'ivoluntee.firebaseapp.com',
  databaseURL: 'https://ivoluntee.firebaseio.com',
  projectId: 'ivoluntee',
  storageBucket: '',
  messagingSenderId: '868622001028'
};

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
    PageNotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
