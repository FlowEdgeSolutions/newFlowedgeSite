import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai-solution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-solution.component.html',
  styleUrl: './ai-solution.component.scss'
})
export class AiSolutionComponent {
  solutions = [
    {
      id: 'strategy',
      title: 'KI-Strategie & Beratung',
      description: 'Wir analysieren Ihre Prozesse, identifizieren relevante Anwendungsfälle und prüfen Machbarkeit und Nutzen. Gemeinsam entwickeln wir eine klare, umsetzbare Roadmap – unabhängig von Tools, mit Fokus auf Quick-Wins und nachhaltigen Mehrwert.',
      features: [
        'Priorisierung & Wirtschaftlichkeitsanalyse',
        'Machbarkeits-Check & Datenstrategie',
        'Roadmap, Governance & Umsetzungspfad'
      ],
      icon: 'strategy'
    },
    {
      id: 'development',
      title: 'Individuelle KI-Entwicklung',
      description: 'Ob Prototyp oder Produktivsystem – wir entwickeln Ihre KI-Lösung passgenau zu Ihren Anforderungen. Schnell, DSGVO-konform und perfekt integriert in Ihre bestehenden Systeme und Prozesse.',
      features: [
        'Entwicklung auf Wunsch (Azure, M365, eigene APIs)',
        'Schnelle Prototypen, stabile Produktivsysteme',
        'Betrieb, Monitoring & Support durch FlowEdge AI'
      ],
      icon: 'development'
    }
  ];

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
