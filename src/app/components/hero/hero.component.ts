import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
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
export class HeroComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  currentSlide = signal(0);
  isTransitioning = signal(false);
  autoplayInterval: any;
  touchStartX = 0;
  touchEndX = 0;

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

  aiders: Aider[] = [
    {
      id: 'voice-aider',
      name: 'VoiceAider',
      tagline: 'Ihre Stimme, Ihre Lösung',
      description: 'KI-gestützte Sprachassistenz für nahtlose Kommunikation und schnelle Entscheidungen',
      icon: 'heroMicrophone',
      gradient: 'linear-gradient(135deg, #10388c 0%, #4a7fc8 100%)',
      features: ['Spracherkennung', 'Echtzeit-Übersetzung', 'Smart Responses']
    },
    {
      id: 'doc-aider',
      name: 'DocAider',
      tagline: 'Dokumentation leicht gemacht',
      description: 'Automatisierte Dokumentenerstellung und intelligente Verwaltung für maximale Effizienz',
      icon: 'heroDocumentText',
      gradient: 'linear-gradient(135deg, #6095c6 0%, #10388c 100%)',
      features: ['Auto-Dokumentation', 'Smart Templates', 'Versionskontrolle']
    },
    {
      id: 'code-aider',
      name: 'CodeAider',
      tagline: 'Programmieren neu definiert',
      description: 'KI-unterstützte Entwicklung mit intelligenten Code-Vorschlägen und Optimierungen',
      icon: 'heroCommandLine',
      gradient: 'linear-gradient(135deg, #4a7fc8 0%, #6095c6 100%)',
      features: ['Code-Completion', 'Refactoring', 'Bug Detection']
    },
    {
      id: 'chat-aider',
      name: 'ChatAider',
      tagline: 'Intelligente Konversationen',
      description: 'Kontextbewusste KI-Assistenz für Support, Beratung und Kundeninteraktion',
      icon: 'heroChatBubbleLeftRight',
      gradient: 'linear-gradient(135deg, #10388c 0%, #6095c6 100%)',
      features: ['24/7 Support', 'Kontextverständnis', 'Multi-Sprachen']
    }
  ];

  ngOnInit() {
    // Autoplay deaktiviert - nur manuelle Navigation
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide() {
    if (this.isTransitioning()) return;
    this.isTransitioning.set(true);
    const totalSlides = this.aiders.length + 1; // +1 for original hero
    this.currentSlide.set((this.currentSlide() + 1) % totalSlides);
    setTimeout(() => this.isTransitioning.set(false), 500);
  }

  prevSlide() {
    if (this.isTransitioning()) return;
    this.isTransitioning.set(true);
    const totalSlides = this.aiders.length + 1; // +1 for original hero
    this.currentSlide.set(
      this.currentSlide() === 0 ? totalSlides - 1 : this.currentSlide() - 1
    );
    setTimeout(() => this.isTransitioning.set(false), 500);
  }

  goToSlide(index: number) {
    if (this.isTransitioning() || index === this.currentSlide()) return;
    this.isTransitioning.set(true);
    this.currentSlide.set(index);
    setTimeout(() => this.isTransitioning.set(false), 500);
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // Kein Autoplay mehr
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Kein Autoplay mehr
  }

  scrollToContact() {
    this.router.navigate(['/kontakt']).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
