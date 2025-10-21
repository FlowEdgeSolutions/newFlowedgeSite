import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      const formData = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        company: this.contactForm.value.company,
        phone: this.contactForm.value.phone,
        message: this.contactForm.value.message
      };

      try {
        const success = await this.emailService.sendEmail(formData);
        
        if (success) {
          this.isSubmitted = true;
          this.isLoading = false;
          this.contactForm.reset();
        } else {
          this.errorMessage = 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.';
          this.isLoading = false;
        }
      } catch (error) {
        this.errorMessage = 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.';
        this.isLoading = false;
      }
    }
  }

  resetForm() {
    this.isSubmitted = false;
    this.contactForm.reset();
  }
}
