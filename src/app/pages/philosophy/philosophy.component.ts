import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { 
  heroArrowTrendingUp,
  heroSparkles,
  heroCpuChip,
  heroExclamationTriangle,
  heroCurrencyDollar,
  heroPuzzlePiece,
  heroBoltSlash,
  heroLink,
  heroRocketLaunch,
  heroLightBulb,
  heroChartBar,
  heroCog6Tooth
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [CommonModule, NgIconComponent, ContactFormComponent],
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.scss',
  viewProviders: [provideIcons({ 
    heroArrowTrendingUp,
    heroSparkles,
    heroCpuChip,
    heroExclamationTriangle,
    heroCurrencyDollar,
    heroPuzzlePiece,
    heroBoltSlash,
    heroLink,
    heroRocketLaunch,
    heroLightBulb,
    heroChartBar,
    heroCog6Tooth
  })]
})
export class PhilosophyComponent {
  problems = [
    {
      icon: 'heroExclamationTriangle',
      title: 'Isolierte Projekte',
      description: 'KI-Initiativen ohne übergreifende Strategie'
    },
    {
      icon: 'heroCurrencyDollar',
      title: 'Hohe Kosten',
      description: 'Investitionen ohne klaren ROI'
    },
    {
      icon: 'heroPuzzlePiece',
      title: 'Fehlende Integration',
      description: 'Systeme arbeiten nicht zusammen'
    }
  ];

  flowSteps = [
    {
      icon: 'heroSparkles',
      phase: 'Strategie',
      description: 'Wir identifizieren Potenziale, analysieren Prozesse und definieren Ziele.'
    },
    {
      icon: 'heroCog6Tooth',
      phase: 'Automatisierung',
      description: 'Wir verbinden Systeme, eliminieren manuelle Arbeit und schaffen reibungslose Abläufe.'
    },
    {
      icon: 'heroCpuChip',
      phase: 'Intelligenz',
      description: 'Wir integrieren KI so, dass sie echten Mehrwert liefert – lernend, sicher und messbar.'
    }
  ];

  philosophyConcepts = [
    {
      title: 'Flow',
      subtitle: 'Bewegung',
      icon: 'heroArrowTrendingUp',
      description: 'Flow steht für Bewegung – Prozesse, die fließen.',
      color: 'primary'
    },
    {
      title: 'Edge',
      subtitle: 'Präzision',
      icon: 'heroSparkles',
      description: 'Edge steht für Präzision – Entscheidungen, die zählen.',
      color: 'accent'
    },
    {
      title: 'AI',
      subtitle: 'Intelligenz',
      icon: 'heroCpuChip',
      description: 'AI steht für Intelligenz – Systeme, die verstehen.',
      color: 'light'
    }
  ];

  benefits = [
    {
      icon: 'heroBoltSlash',
      text: 'Schnellere Entscheidungsprozesse'
    },
    {
      icon: 'heroLink',
      text: 'Vernetzte Systeme'
    },
    {
      icon: 'heroRocketLaunch',
      text: 'Skalierbare Automatisierungen'
    },
    {
      icon: 'heroLightBulb',
      text: 'Klare KI-Roadmaps'
    },
    {
      icon: 'heroChartBar',
      text: 'Messbarer Mehrwert'
    }
  ];

  scrollToContact() {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
