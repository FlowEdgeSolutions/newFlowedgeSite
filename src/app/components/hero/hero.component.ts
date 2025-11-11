import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { 
  heroSparkles,
  heroCog6Tooth,
  heroUserGroup,
  heroMicrophone,
  heroDocumentText,
  heroCommandLine,
  heroChatBubbleLeftRight
} from '@ng-icons/heroicons/outline';

interface Aider {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  viewProviders: [provideIcons({ 
    heroSparkles, 
    heroCog6Tooth, 
    heroUserGroup,
    heroMicrophone,
    heroDocumentText,
    heroCommandLine,
    heroChatBubbleLeftRight
  })]
})
export class HeroComponent {
  constructor(private router: Router) {}

  // Original features for first slide
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

  // Carousel removed; keep only features for decorative cards

  scrollToContact() {
    this.router.navigate(['/kontakt']).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
