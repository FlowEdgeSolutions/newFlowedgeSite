import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  title: string;
  description: string;
}

interface UseCase {
  icon: string;
  title: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  features: string[];
}

@Component({
  selector: 'app-voiceaider-ai',
  imports: [CommonModule],
  templateUrl: './voiceaider-ai.html',
  styleUrl: './voiceaider-ai.scss'
})
export class VoiceaiderAi implements OnInit {

  features: Feature[] = [
    {
      icon: '☎️',
      title: 'Anrufe entgegennehmen',
      description: 'Begrüßt Anrufer, beantwortet Fragen und leitet bei Bedarf an Mitarbeitende weiter.'
    },
    {
      icon: '📅',
      title: 'Termine koordinieren',
      description: 'Synchronisiert mit Outlook / Microsoft 365 / Google Calendar.'
    },
    {
      icon: '📣',
      title: 'Outbound-Anrufe',
      description: 'Kontaktaufnahme mit Interessenten, Nachfass-Gespräche oder Terminbestätigungen.'
    },
    {
      icon: '📧',
      title: 'Benachrichtigungen senden',
      description: 'Automatische E-Mails oder Teams-Nachrichten bei neuen Anfragen.'
    }
  ];

  steps: Step[] = [
    {
      title: 'Kunde ruft an oder wird angerufen',
      description: 'VoiceAider AI nimmt automatisch eingehende Anrufe entgegen oder führt geplante Outbound-Gespräche durch.'
    },
    {
      title: 'VoiceAider AI erkennt das Anliegen in Echtzeit',
      description: 'Durch fortschrittliche Spracherkennung versteht die KI sofort, was der Kunde möchte.'
    },
    {
      title: 'Antwortet natürlich und dokumentiert',
      description: 'Die KI führt ein natürliches Gespräch, vereinbart Termine oder sammelt wichtige Informationen.'
    },
    {
      title: 'Automatische Systemintegration',
      description: 'Alle Informationen werden direkt an Ihr CRM, Kalender oder andere Systeme übertragen.'
    }
  ];

  benefits: string[] = [
    'Rund-um-die-Uhr erreichbar – keine Öffnungszeiten, keine Pausen.',
    'Natürlich klingende Stimmen – in mehreren Sprachen verfügbar.',
    'Individuell anpassbar – Begrüßung, Gesprächsfluss, Sprache & Ton.',
    'DSGVO-konform & in der EU gehostet.',
    'Schnelle Einrichtung – Einsatzbereit in wenigen Stunden.'
  ];

  useCases: UseCase[] = [
    {
      icon: '🏥',
      title: 'Praxen & Kanzleien',
      description: 'Automatische Terminvereinbarung, Rückrufe und Anrufannahme.'
    },
    {
      icon: '🧰',
      title: 'Werkstätten & Servicebetriebe',
      description: 'Auftragsannahme, Ersatzteil- oder Statusanfragen.'
    },
    {
      icon: '💼',
      title: 'Agenturen & Beratungen',
      description: 'Kundenanfragen entgegennehmen, Erstgespräche koordinieren.'
    },
    {
      icon: '📞',
      title: 'Vertrieb & Marketing',
      description: 'Qualifizierung von Leads, Nachfass-Gespräche, Outbound-Aktionen.'
    }
  ];

  pricingPlans: PricingPlan[] = [
    {
      name: 'Starter',
      price: 'ab 199 €',
      period: '/Monat',
      features: [
        '1 Telefonnummer',
        '500 Gesprächsminuten',
        'Standard-Voice',
        'Basis-Integration'
      ]
    },
    {
      name: 'Professional',
      price: 'ab 399 €',
      period: '/Monat',
      features: [
        'Inbound + Outbound',
        'Eigene Stimme',
        'Kalender-Integration',
        'CRM-Anbindung'
      ]
    },
    {
      name: 'Enterprise',
      price: 'auf Anfrage',
      features: [
        'Mehrsprachig',
        'CRM-Anbindung',
        'Individuelle Flows',
        'Premium Support'
      ]
    }
  ];

  constructor(
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    // SEO Metadaten setzen
    this.title.setTitle('VoiceAider AI – Der intelligente KI-Telefonassistent von FlowEdge Solutions');
    
    this.meta.updateTag({
      name: 'description',
      content: 'VoiceAider AI übernimmt Ihre Anrufe, vereinbart Termine und spricht mit Ihren Kunden – 24/7, DSGVO-konform und sofort einsatzbereit.'
    });
    
    this.meta.updateTag({
      name: 'keywords',
      content: 'KI Telefonassistent, Anrufautomatisierung, Voice AI, FlowEdge Solutions, DSGVO KI, Callbot Deutschland'
    });
    
    this.meta.updateTag({
      property: 'og:title',
      content: 'VoiceAider AI – Ihr intelligenter Telefonassistent'
    });
    
    this.meta.updateTag({
      property: 'og:description',
      content: 'VoiceAider AI führt Kundengespräche, vereinbart Termine, nimmt Anrufe entgegen und ruft aktiv Kunden an – 24/7, mehrsprachig und vollständig DSGVO-konform.'
    });
    
    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });
  }

  requestDemo() {
    // Navigation zur Kontakt-Seite mit Demo-Parameter
    this.router.navigate(['/kontakt'], { queryParams: { service: 'voiceaider-demo' } });
  }

  testLiveCall() {
    // Hier könnte eine Live-Call-Demo implementiert werden
    window.open('tel:+4915560814385', '_self');
  }

  requestQuote() {
    // Navigation zur Kontakt-Seite mit Angebot-Parameter
    this.router.navigate(['/kontakt'], { queryParams: { service: 'voiceaider-quote' } });
  }

  bookConsultation() {
    // Navigation zur Kontakt-Seite mit Beratung-Parameter
    this.router.navigate(['/kontakt'], { queryParams: { service: 'voiceaider-consultation' } });
  }
}
