import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  submitForm() {
    console.log('Form submitted:', this.formData);
    // Hier würde die tatsächliche Formular-Logik implementiert werden
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      company: '',
      message: ''
    };
  }
}
