import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
  joinedAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  currentUser = signal<User | null>(null);

  constructor(private router: Router) {
    // Check locally stored user on init
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser.set(JSON.parse(storedUser));
    }
  }

  // Mock database logic
  private getUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  register(name: string, email: string, pass: string): boolean {
    const users = this.getUsers();
    if (users.find(u => u.email === email)) {
      return false; // Email exists
    }
    
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      bio: "New user ready to explore!",
      joinedAt: new Date().toISOString()
    };
    
    // In our mock backend, we store password next to the user object
    const userDbEntry = { ...newUser, pass };
    localStorage.setItem('users', JSON.stringify([...users, userDbEntry]));
    
    // Auto login
    this.currentUser.set(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return true;
  }

  login(email: string, pass: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]'); // Contains passes
    const user = users.find((u: any) => u.email === email && u.pass === pass);
    if (user) {
      // Remove pass for currentUser state
      const { pass: _, ...userData } = user;
      this.currentUser.set(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return true;
    }
    return false;
  }

  updateProfile(bio: string): void {
    const current = this.currentUser();
    if (!current) return;
    
    const updated = { ...current, bio };
    this.currentUser.set(updated);
    localStorage.setItem('currentUser', JSON.stringify(updated));
    
    // Update db
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUsers = users.map((u: any) => u.id === current.id ? { ...u, bio } : u);
    localStorage.setItem('users', JSON.stringify(newUsers));
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
