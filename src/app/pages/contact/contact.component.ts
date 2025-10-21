import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  heroPhone,
  heroEnvelope,
  heroMapPin,
  heroClock,
  heroCheckCircle
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  viewProviders: [provideIcons({ 
    heroPhone,
    heroEnvelope,
    heroMapPin,
    heroClock,
    heroCheckCircle
  })]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitted = false;

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
      value: 'Königsallee 63–65, 40215 Düsseldorf',
      link: 'https://maps.google.com/?q=Königsallee+63-65+Düsseldorf'
    },
    {
      icon: 'heroClock',
      label: 'Öffnungszeiten',
      value: 'Mo–Fr: 9:00–18:00 Uhr',
      link: null
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.isSubmitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.contactForm.reset();
        this.isSubmitted = false;
      }, 3000);
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
