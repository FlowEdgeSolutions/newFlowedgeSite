import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { CalBookingComponent } from '../../components/cal-booking/cal-booking.component';
import { 
  heroPhone,
  heroEnvelope,
  heroMapPin,
  heroClock,
  heroCheckCircle,
  heroExclamationCircle
} from '@ng-icons/heroicons/outline';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIconComponent, CalBookingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  viewProviders: [provideIcons({ 
    heroPhone,
    heroEnvelope,
    heroMapPin,
    heroClock,
    heroCheckCircle,
    heroExclamationCircle
  })]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  errorMessage = '';

  contactInfo = [
    {
      icon: 'heroPhone',
      label: 'Telefon',
      value: '+49 15560 814 385',
      link: 'tel:+4921197532540'
    },
    {
      icon: 'heroEnvelope',
      label: 'E-Mail',
      value: 'info@flowedge.de',
      link: 'mailto:info@flowedge.de'
    },
    {
      icon: 'heroMapPin',
      label: 'Adresse',
      value: 'Königsallee 63, 40215 Düsseldorf',
      link: 'https://maps.google.com/?q=Königsallee+63+Düsseldorf'
    },
    {
      icon: 'heroClock',
      label: 'Öffnungszeiten',
      value: 'Mo–Fr: 9:00–18:00 Uhr',
      link: null
    }
  ];

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [''],
      message: ['', Validators.required]
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
        // Versuch 1: EmailJS
        const emailSuccess = await this.emailService.sendEmail(formData);
        
        if (emailSuccess) {
          this.isSubmitted = true;
          this.isLoading = false;
          
          // Reset form after 3 seconds
          setTimeout(() => {
            this.contactForm.reset();
            this.isSubmitted = false;
          }, 3000);
        } else {
          // Fallback: Netlify Forms
          const netlifySuccess = await this.emailService.sendViaNetlify(this.contactForm.value);
          
          if (netlifySuccess) {
            this.isSubmitted = true;
            this.isLoading = false;
            
            setTimeout(() => {
              this.contactForm.reset();
              this.isSubmitted = false;
            }, 3000);
          } else {
            throw new Error('E-Mail konnte nicht gesendet werden');
          }
        }
      } catch (error) {
        this.isLoading = false;
        this.errorMessage = 'Es gab ein Problem beim Versenden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.';
        console.error('Fehler beim Absenden:', error);
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  get f() {
    return this.contactForm.controls;
  }
}