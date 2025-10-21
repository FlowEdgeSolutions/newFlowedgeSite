import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface EmailData {
  from_name: string;
  from_email: string;
  company?: string;
  phone?: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // EmailJS Konfiguration für Microsoft Outlook
  // TODO: Nach EmailJS-Setup diese Werte durch Ihre eigenen ersetzen:
  // 1. Gehe zu https://dashboard.emailjs.com/admin
  // 2. Kopiere deine Service ID (Email Services)
  // 3. Kopiere beide Template IDs (Email Templates)
  // 4. Kopiere deinen Public Key (Account → General)
  
  private readonly SERVICE_ID = 'service_3sythiy';           // Outlook Service
  private readonly TEMPLATE_NOTIFICATION = 'template_spgd84g';  // Template 1: An dich (Auto-Reply)
  private readonly TEMPLATE_CONFIRMATION = 'template_924xkrg';  // Template 2: An Kunde (Welcome)
  private readonly PUBLIC_KEY = 'o3pAfQOWRpEuNjHBK';            // Public Key

  constructor() {
    // Initialize EmailJS
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendEmail(data: EmailData): Promise<boolean> {
    try {
      // Template-Parameter für EmailJS
      const templateParams = {
        from_name: data.from_name,
        from_email: data.from_email,
        company: data.company || 'Nicht angegeben',
        phone: data.phone || 'Nicht angegeben',
        message: data.message
      };

      // 1. Benachrichtigung an dich (info@flowedge.de)
      const notificationResponse = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_NOTIFICATION,
        templateParams
      );

      // 2. Bestätigung an den Kunden
      const confirmationResponse = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_CONFIRMATION,
        templateParams
      );

      console.log('Benachrichtigung gesendet:', notificationResponse);
      console.log('Bestätigung gesendet:', confirmationResponse);
      
      return notificationResponse.status === 200 && confirmationResponse.status === 200;
    } catch (error) {
      console.error('Fehler beim E-Mail-Versand:', error);
      return false;
    }
  }

  // Fallback: Netlify Forms submission
  async sendViaNetlify(formData: any): Promise<boolean> {
    try {
      const form = new FormData();
      form.append('form-name', 'contact');
      
      Object.keys(formData).forEach(key => {
        form.append(key, formData[key]);
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form as any).toString()
      });

      return response.ok;
    } catch (error) {
      console.error('Fehler bei Netlify Forms:', error);
      return false;
    }
  }
}
