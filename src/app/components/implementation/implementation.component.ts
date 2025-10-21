import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Solution {
  title: string;
  description: string;
}

@Component({
  selector: 'app-implementation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.scss']
})
export class ImplementationComponent {
  solutions: Solution[] = [
    {
      title: 'Automatisierung mit Power Automate und Make',
      description: 'Workflow-Optimierung und Prozessautomatisierung'
    },
    {
      title: 'KI-Integrationen mit Azure OpenAI und Microsoft 365',
      description: 'Intelligente Lösungen in Ihrer bestehenden Infrastruktur'
    },
    {
      title: 'Individuelle Softwareentwicklung (Python, TypeScript, React)',
      description: 'Maßgeschneiderte Anwendungen für Ihre Anforderungen'
    },
    {
      title: 'Outlook- und SharePoint-Add-ins',
      description: 'Nahtlose Integration in Ihre tägliche Arbeit'
    }
  ];
}
