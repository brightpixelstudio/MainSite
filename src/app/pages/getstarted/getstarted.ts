import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'getstarted',
  imports: [FormsModule],
  templateUrl: './getstarted.html',
  styleUrl: './getstarted.css',
})
export class Getstarted {
  recipientEmail = 'brightpixelstudios@gmail.com';
  userForm = { username: '', email: '', phone: '', information: '' };

  onSubmit(form: NgForm) {
    if (form.valid) {
      //console.log('Form Data:', form.value);

      const subject = encodeURIComponent('Get Started at SunRay Designs!');
      const body = encodeURIComponent(
        `Name: ${form.value.username}\nEmail: ${form.value.email}\nPhone: ${form.value.phone}\nInformation: ${form.value.information}\nProject Type: ${form.value.projecttype}\nCurrent URL: ${form.value.url}\nProject Duration: ${form.value.projectbudget}\nProject Budget: ${form.value.projectduration}`,
      );

      // Build the finalized mailto string
      const mailtoUrl = `mailto:${this.recipientEmail}?subject=${subject}&body=${body}`;

      // Trigger the operating system's default email client
      window.open(mailtoUrl, '_blank');
    }
  }
}
