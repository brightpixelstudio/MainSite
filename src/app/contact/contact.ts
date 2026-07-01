import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  recipientEmail = 'brightpixelstudios@gmail.com';
  userForm = { username: '', email: '', phone: '', information: '' };

  onSubmit(form: NgForm) {
    if (form.valid) {
      //console.log('Form Data:', form.value);

      const subject = encodeURIComponent('Contact SunRay Designs!');
      const body = encodeURIComponent(
        `Name: ${form.value.username}\nEmail: ${form.value.email}\nPhone: ${form.value.phone}\nInformation: ${form.value.information}`,
      );

      // Build the finalized mailto string
      const mailtoUrl = `mailto:${this.recipientEmail}?subject=${subject}&body=${body}`;

      // Trigger the operating system's default email client
      window.open(mailtoUrl, '_blank');
    }
  }
}
