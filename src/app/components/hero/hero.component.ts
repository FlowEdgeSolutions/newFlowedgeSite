import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  heroSparkles,
  heroCog6Tooth,
  heroUserGroup
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  viewProviders: [provideIcons({ heroSparkles, heroCog6Tooth, heroUserGroup })]
})
export class HeroComponent {
  constructor(private router: Router) {}

  features = [
    {
      icon: 'heroSparkles',
      title: 'KI-Strategie',
      description: 'Zukunftssicher planen'
    },
    {
      icon: 'heroCog6Tooth',
      title: 'Automatisierung',
      description: 'Intelligente Abläufe'
    },
    {
      icon: 'heroUserGroup',
      title: 'Beratung',
      description: 'Persönlich & praxisnah'
    }
  ];

  scrollToContact() {
    this.router.navigate(['/kontakt']).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
