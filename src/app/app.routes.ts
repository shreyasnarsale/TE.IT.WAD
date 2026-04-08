import { Routes } from '@angular/router';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Profile } from './components/profile/profile';
import { inject } from '@angular/core';
import { Auth } from './services/auth';
import { Router } from '@angular/router';

// Simple guard
const authGuard = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  if (auth.currentUser()) return true;
  return router.navigate(['/login']);
};

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile, canActivate: [authGuard] },
  { path: '**', redirectTo: '/login' }
];
