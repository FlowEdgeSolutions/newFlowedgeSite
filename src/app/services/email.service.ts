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
  private readonly TEMPLATE_NOTIFICATION = 'template_spgd84g';  // Template: An dich (Auto-Reply = Benachrichtigung)
  private readonly TEMPLATE_CONFIRMATION = 'template_924xkrg';  // Template: An Kunde (Welcome = Bestätigung)
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
        message: data.message,
        to_name: data.from_name, // Für personalisierte Kundenmail
        reply_to: data.from_email // Wichtig für Auto-Reply
      };

      console.log('📧 Sende E-Mail mit Parametern:', templateParams);

      // Sende NUR das Notification-Template
      // Die Kundenbestätigung wird automatisch via Auto-Reply in EmailJS gesendet
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_NOTIFICATION, // Template: Auto-Reply (mit aktivierter Auto-Reply Funktion)
        templateParams
      );

      console.log('✅ E-Mail-Status:', response.status, response.text);
      
      if (response.status === 200) {
        console.log('✅ Benachrichtigung gesendet + Auto-Reply aktiviert');
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('❌ Fehler beim E-Mail-Versand:', error);
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
