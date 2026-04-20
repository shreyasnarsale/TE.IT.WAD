import { Component, inject, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './profile.html',
})
export class Profile {
  auth = inject(Auth);
  
  isEditing = signal(false);
  bioDraft = signal('');
  successMessage = signal('');
  
  constructor() {
    effect(() => {
      const user = this.auth.currentUser();
      if (user) {
        this.bioDraft.set(user.bio || '');
      }
    }, { allowSignalWrites: true });
  }

  toggleEdit() {
    this.isEditing.set(!this.isEditing());
    if (this.isEditing()) {
        this.successMessage.set('');
    }
  }

  saveProfile() {
    this.auth.updateProfile(this.bioDraft());
    this.isEditing.set(false);
    this.successMessage.set('Profile updated successfully!');
    
    setTimeout(() => {
      this.successMessage.set('');
    }, 3000);
  }
}
