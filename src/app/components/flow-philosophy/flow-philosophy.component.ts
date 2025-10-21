import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  heroSparkles,
  heroCog6Tooth,
  heroCpuChip
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-flow-philosophy',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './flow-philosophy.component.html',
  styleUrl: './flow-philosophy.component.scss',
  viewProviders: [provideIcons({ heroSparkles, heroCog6Tooth, heroCpuChip })]
})
export class FlowPhilosophyComponent {
  flowSteps = [
    {
      title: 'Strategie',
      subtitle: 'Die Quelle',
      description: 'Klare Vision & Planung',
      icon: 'heroSparkles'
    },
    {
      title: 'Automatisierung',
      subtitle: 'Der Strom',
      description: 'Effiziente Prozesse',
      icon: 'heroCog6Tooth'
    },
    {
      title: 'Intelligenz',
      subtitle: 'Das Ziel',
      description: 'Lernfähige Systeme',
      icon: 'heroCpuChip'
    }
  ];
}
