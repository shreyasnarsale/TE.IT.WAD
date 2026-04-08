import { Component, inject, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.html',
})
export class Register {
  name = signal('');
  email = signal('');
  password = signal('');
  error = signal('');
  
  private auth = inject(Auth);
  private router = inject(Router);

  onSubmit() {
    this.error.set('');
    if (!this.name() || !this.email() || !this.password()) {
      this.error.set('Please fill in all fields.');
      return;
    }
    
    const success = this.auth.register(this.name(), this.email(), this.password());
    if (success) {
      this.router.navigate(['/profile']);
    } else {
      this.error.set('An account with this email already exists.');
    }
  }
}
