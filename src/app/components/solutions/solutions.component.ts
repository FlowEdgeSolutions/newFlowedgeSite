import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroSparkles, heroCog6Tooth, heroUserGroup } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ heroSparkles, heroCog6Tooth, heroUserGroup })],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  solutions = [
    {
      icon: 'heroSparkles',
      title: 'Strategische KI-Beratung',
      description: 'Potenziale identifizieren, Roadmap entwickeln, Quick Wins realisieren.',
      features: [
        'Prozessanalyse & Use Cases',
        'Wirtschaftlichkeitsprüfung',
        'Strategische Roadmap'
      ]
    },
    {
      icon: 'heroCog6Tooth',
      title: 'KI-Entwicklung',
      description: 'Maßgeschneiderte Lösungen von Prototyp bis Produktivsystem.',
      features: [
        'Azure, M365, APIs',
        'DSGVO-konform',
        'Nahtlose Integration'
      ]
    },
    {
      icon: 'heroUserGroup',
      title: 'Change Management',
      description: 'Teams befähigen, KI erfolgreich im Alltag einzusetzen.',
      features: [
        'Schulungen & Workshops',
        'Prozessintegration',
        'Laufender Support'
      ]
    }
  ];

  scrollToContact() {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
