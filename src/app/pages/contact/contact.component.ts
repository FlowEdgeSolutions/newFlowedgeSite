import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
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
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIconComponent],
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
export class ContactComponent implements OnInit {
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

  ngOnInit() {
    // Load Cal.com script after view init
    this.loadCalComScript();
  }

  loadCalComScript() {
    // Check if script is already loaded
    if (typeof window !== 'undefined' && !(window as any).Cal) {
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      script.onload = () => {
        this.initializeCalCom();
      };
      document.head.appendChild(script);
    } else if ((window as any).Cal) {
      this.initializeCalCom();
    }
  }

  initializeCalCom() {
    // Initialize Cal.com inline calendar
    if (typeof window !== 'undefined' && (window as any).Cal) {
      const Cal = (window as any).Cal;
      
      // Make sure the namespace is initialized
      if (!Cal.ns["erstgesprach-digitale-prozesse-automatisierung"]) {
        Cal("init", "erstgesprach-digitale-prozesse-automatisierung", {origin:"https://app.cal.com"});
      }
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        try {
          // Check if the container element exists
          const container = document.getElementById("my-cal-inline-erstgesprach-digitale-prozesse-automatisierung");
          if (container) {
            Cal.ns["erstgesprach-digitale-prozesse-automatisierung"]("inline", {
              elementOrSelector:"#my-cal-inline-erstgesprach-digitale-prozesse-automatisierung",
              config: {"layout":"month_view","theme":"auto"},
              calLink: "flowedge/erstgesprach-digitale-prozesse-automatisierung",
            });
            
            Cal.ns["erstgesprach-digitale-prozesse-automatisierung"]("ui", {
              "cssVarsPerTheme":{"light":{"cal-brand":"#147dc8"},"dark":{"cal-brand":"#fafafa"}},
              "hideEventTypeDetails":false,
              "layout":"month_view"
            });
            
            console.log("Cal.com inline calendar initialized successfully");
          } else {
            console.error("Cal.com container element not found");
          }
        } catch (e) {
          console.log("Cal.com initialization failed, retrying...", e);
          // Retry once more after a delay
          setTimeout(() => {
            try {
              const container = document.getElementById("my-cal-inline-erstgesprach-digitale-prozesse-automatisierung");
              if (container) {
                Cal.ns["erstgesprach-digitale-prozesse-automatisierung"]("inline", {
                  elementOrSelector:"#my-cal-inline-erstgesprach-digitale-prozesse-automatisierung",
                  config: {"layout":"month_view","theme":"auto"},
                  calLink: "flowedge/erstgesprach-digitale-prozesse-automatisierung",
                });
              }
            } catch (e2) {
              console.error("Cal.com initialization failed after retry", e2);
            }
          }, 1000);
        }
      }, 500);
    }
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