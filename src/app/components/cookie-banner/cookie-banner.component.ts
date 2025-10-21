import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {
  showBanner = false;
  showSettings = false;
  
  // Cookie-Einstellungen
  cookieSettings = {
    necessary: true, // Immer aktiviert
    analytics: false,
    marketing: false
  };

  ngOnInit() {
    // Prüfe, ob bereits eine Zustimmung vorliegt
    const consent = this.getConsent();
    if (!consent) {
      // Zeige Banner nach kurzer Verzögerung
      setTimeout(() => {
        this.showBanner = true;
      }, 1000);
    }
  }

  // Alle Cookies akzeptieren
  acceptAll() {
    this.cookieSettings = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    this.saveConsent();
    this.closeBanner();
  }

  // Nur notwendige Cookies akzeptieren
  acceptNecessary() {
    this.cookieSettings = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    this.saveConsent();
    this.closeBanner();
  }

  // Einstellungen anzeigen
  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  // Ausgewählte Einstellungen speichern
  saveSettings() {
    this.saveConsent();
    this.closeBanner();
  }

  // Zustimmung im LocalStorage speichern
  private saveConsent() {
    const consent: CookieConsent = {
      necessary: this.cookieSettings.necessary,
      analytics: this.cookieSettings.analytics,
      marketing: this.cookieSettings.marketing,
      timestamp: Date.now()
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    
    // Hier können Sie die entsprechenden Tracking-Scripts laden
    if (consent.analytics) {
      this.loadAnalytics();
    }
    if (consent.marketing) {
      this.loadMarketing();
    }
  }

  // Zustimmung abrufen
  private getConsent(): CookieConsent | null {
    const consentStr = localStorage.getItem('cookie-consent');
    if (consentStr) {
      const consent = JSON.parse(consentStr) as CookieConsent;
      // Prüfe, ob Zustimmung älter als 6 Monate ist
      const sixMonthsAgo = Date.now() - (6 * 30 * 24 * 60 * 60 * 1000);
      if (consent.timestamp > sixMonthsAgo) {
        return consent;
      }
    }
    return null;
  }

  // Banner schließen
  private closeBanner() {
    this.showBanner = false;
    this.showSettings = false;
  }

  // Analytics-Script laden (z.B. Google Analytics)
  private loadAnalytics() {
    // Beispiel: Google Analytics laden
    // window.gtag('consent', 'update', { analytics_storage: 'granted' });
    console.log('Analytics aktiviert');
  }

  // Marketing-Scripts laden
  private loadMarketing() {
    // Beispiel: Marketing-Tracking laden
    // window.gtag('consent', 'update', { ad_storage: 'granted' });
    console.log('Marketing aktiviert');
  }
}
