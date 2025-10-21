import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  heroLightBulb,
  heroRocketLaunch,
  heroCog,
  heroChartBar,
  heroCheckCircle,
  heroUserGroup,
  heroDocumentText,
  heroSparkles,
  heroCube,
  heroArrowPath,
  heroShieldCheck,
  heroAcademicCap
} from '@ng-icons/heroicons/outline';

interface Solution {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  benefits: string[];
  result: string;
  resultLabel: string;
}

interface ApproachStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  section: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
  viewProviders: [provideIcons({ 
    heroLightBulb,
    heroRocketLaunch,
    heroCog,
    heroChartBar,
    heroCheckCircle,
    heroUserGroup,
    heroDocumentText,
    heroSparkles,
    heroCube,
    heroArrowPath,
    heroShieldCheck,
    heroAcademicCap
  })]
})
export class SolutionsComponent {
  String = String;
  
  constructor(private router: Router) {}
  
  solutions: Solution[] = [
    {
      title: 'Strategische KI-Beratung',
      subtitle: 'Zukunft verstehen. Richtung geben. Wirkung entfalten.',
      description: 'Wir entwickeln mit Ihnen eine klare KI-Strategie, die auf Ihre Unternehmensziele abgestimmt ist – praxisnah, wirtschaftlich und umsetzbar.',
      icon: 'heroLightBulb',
      benefits: [
        'Analyse bestehender Prozesse und Potenziale',
        'Entwicklung einer individuellen KI-Roadmap',
        'Wirtschaftlichkeitsprüfung und Quick-Win-Strategien',
        'Strategische Begleitung bei KI-Initiativen'
      ],
      resultLabel: 'Ergebnis',
      result: 'Ein klarer Plan, der Technologie, Menschen und Prozesse verbindet – und Ihnen einen nachhaltigen Wettbewerbsvorteil verschafft.'
    },
    {
      title: 'Automatisierung & Prozessoptimierung',
      subtitle: 'Intelligente Abläufe – messbare Effizienz.',
      description: 'Wir identifizieren Engpässe und manuelle Tätigkeiten und wandeln sie in automatisierte Workflows um. Dabei setzen wir auf modernste Technologien und bewährte Plattformen wie Microsoft Power Automate, Make und individuelle API-Integrationen.',
      icon: 'heroCog',
      benefits: [
        'Automatisierte Dokumenten- und E-Mail-Prozesse',
        'Verbindung von ERP-, CRM- und M365-Systemen',
        'Genehmigungs- und Reporting-Workflows',
        'Automatische Datenaufbereitung und Übergaben'
      ],
      resultLabel: 'Ihr Vorteil',
      result: 'Schnellere Abläufe, geringere Fehlerquoten und mehr Zeit für das Wesentliche.'
    },
    {
      title: 'KI-Entwicklung & Integration',
      subtitle: 'Von der Vision zur Lösung.',
      description: 'Wir entwickeln maßgeschneiderte KI-Anwendungen – von der Prototypenphase bis zur produktiven Nutzung. Ob GPT-basierte Systeme, Azure OpenAI-Integration oder lokale Ollama-Setups – wir bringen KI dorthin, wo sie echten Mehrwert schafft.',
      icon: 'heroSparkles',
      benefits: [
        'E-Mail- und Textautomatisierung (z. B. MailAider AI)',
        'Dokumentenanalysen (z. B. NDA-Prüfungen, Zusammenfassungen)',
        'Chatbots und Wissenssysteme auf internen Daten',
        'DSGVO-konforme Cloud- und On-Premise-Implementierungen'
      ],
      resultLabel: 'Ziel',
      result: 'KI, die Ihr Unternehmen produktiver, sicherer und intelligenter macht.'
    },
    {
      title: 'Change Management & Befähigung',
      subtitle: 'Technologie entfaltet erst durch Menschen ihre Wirkung.',
      description: 'Wir unterstützen Ihr Team dabei, KI und Automatisierung erfolgreich in den Alltag zu integrieren.',
      icon: 'heroUserGroup',
      benefits: [
        'Schulungen & Workshops für Führungskräfte und Mitarbeitende',
        'Prozessbegleitung bei der Einführung neuer Systeme',
        'Kontinuierlicher Support und Weiterentwicklung'
      ],
      resultLabel: 'Ergebnis',
      result: 'Ein motiviertes Team, das die Möglichkeiten der KI versteht – und aktiv nutzt.'
    }
  ];

  approachSteps: ApproachStep[] = [
    {
      number: '01',
      title: 'Strategie',
      description: 'Wir schaffen Klarheit über Ziele, Prozesse und Potenziale.',
      icon: 'heroDocumentText',
      section: 'strategy'
    },
    {
      number: '02',
      title: 'Automatisierung',
      description: 'Wir optimieren Abläufe und eliminieren Reibungsverluste.',
      icon: 'heroArrowPath',
      section: 'automation'
    },
    {
      number: '03',
      title: 'Intelligenz',
      description: 'Wir integrieren KI-Lösungen, die messbaren Mehrwert liefern.',
      icon: 'heroCube',
      section: 'intelligence'
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToContact() {
    this.router.navigate(['/kontakt']).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
