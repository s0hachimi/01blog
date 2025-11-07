import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/components/login/login';
import { RegisterComponent } from './app/components/register/register';

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ])
  ]
}).catch(err => console.error(err));
