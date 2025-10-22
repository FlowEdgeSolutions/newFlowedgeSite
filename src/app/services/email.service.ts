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
  // Einfacher Workflow: Kunde sendet → Du erhältst E-Mail → Keine Auto-Reply
  
  private readonly SERVICE_ID = 'service_3sythiy';           // Outlook Service
  private readonly TEMPLATE_ID = 'template_spgd84g';         // Template: Kundenanfrage an info@flowedge.de
  private readonly PUBLIC_KEY = 'o3pAfQOWRpEuNjHBK';         // Public Key

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
        reply_to: data.from_email // Ermöglicht direktes Antworten auf Kundenanfrage
      };

      console.log('📧 Sende Kundenanfrage an info@flowedge.de:', templateParams);

      // Sende E-Mail nur an dich (info@flowedge.de)
      // KEIN Auto-Reply → Kunde erhält keine automatische Bestätigung per E-Mail
      // Bestätigung erfolgt nur über UI auf der Webseite
      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );

      console.log('✅ E-Mail-Status:', response.status, response.text);
      
      if (response.status === 200) {
        console.log('✅ Kundenanfrage erfolgreich gesendet');
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
