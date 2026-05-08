import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  formData = { name: '', email: '', subject: '', message: '' };
  submitted = false;

  onSubmit() {
    // TODO: wire up to a real service or API
    this.submitted = true;
    this.formData = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => (this.submitted = false), 4000);
  }
}
