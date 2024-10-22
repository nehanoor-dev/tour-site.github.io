import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
  constructor() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Example of authentication logic: 
      // Replace this with your actual authentication service.
      const { name, email, phone, subject, message } = form.value;

      // For demonstration purposes, let's log the form values
      console.log('Form Submitted:', {
        name,
        email,
        phone,
        subject,
        message
      });

      // Here you would call your authentication service to validate user
      // this.authService.authenticate(name, email, phone, subject, message).subscribe(
      //   response => {
      //     // Handle successful authentication
      //     console.log('Authenticated:', response);
      //   },
      //   error => {
      //     // Handle authentication error
      //     console.error('Authentication failed:', error);
      //   }
      // );

      // Reset form after submission
      form.reset();
    } else {
      console.error('Form is invalid!');
    }
  }
}
