import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Industry {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent {
  industries: Industry[] = [
    {
      icon: '💼',
      title: 'Beratung & Kanzleien',
      description: 'Automatisierte Dokumenten- & E-Mail-Verarbeitung'
    },
    {
      icon: '🏭',
      title: 'Industrie & Fertigung',
      description: 'Prozessoptimierung, Reporting, Schnittstellen'
    },
    {
      icon: '🏢',
      title: 'Dienstleistung & Verwaltung',
      description: 'KI-basierte Kommunikation, Workflow-Steuerung'
    }
  ];
}
