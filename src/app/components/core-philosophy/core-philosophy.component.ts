import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  heroArrowTrendingUp,
  heroSparkles,
  heroCpuChip
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-core-philosophy',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './core-philosophy.component.html',
  styleUrl: './core-philosophy.component.scss',
  viewProviders: [provideIcons({ heroArrowTrendingUp, heroSparkles, heroCpuChip })]
})
export class CorePhilosophyComponent {
  coreConcepts = [
    {
      title: 'Flow',
      subtitle: 'Bewegung',
      icon: 'heroArrowTrendingUp',
      description: 'Alles fließt – Systeme, Daten, Entscheidungen',
      details: 'Bewegung, Verbindung, Natürlichkeit, reibungslose Abläufe',
      color: 'primary'
    },
    {
      title: 'Edge',
      subtitle: 'Präzision',
      icon: 'heroSparkles',
      description: 'Der Punkt, an dem Innovation entsteht',
      details: 'Schärfe, Klarheit, Fokus, Präzision, Grenze',
      color: 'accent'
    },
    {
      title: 'AI',
      subtitle: 'Intelligenz',
      icon: 'heroCpuChip',
      description: 'Das System, das den Flow intelligent steuert',
      details: 'Intelligenz, Lernen, Anpassung, Effizienz',
      color: 'light'
    }
  ];
}
