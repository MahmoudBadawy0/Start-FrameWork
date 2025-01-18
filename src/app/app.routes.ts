import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: 'Home' },
  { path: 'About', component: AboutComponent, title: 'About' },
  { path: 'Contact', component: ContactComponent, title: 'Contact' },
  { path: 'Portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: '**', component: ErrorComponent, title: 'Error' },
];
