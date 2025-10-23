import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-teaser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-teaser.component.html',
  styleUrls: ['./mission-teaser.component.scss']
})
export class MissionTeaserComponent {
  constructor(private router: Router) {}

  scrollToContact() {
    // Prüfen ob wir auf der Startseite sind
    if (this.router.url === '/' || this.router.url === '') {
      // Zur Kontakt-Section auf der gleichen Seite scrollen
      setTimeout(() => {
        const contactSection = document.querySelector('.contact-form-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Zur Kontaktseite navigieren
      this.router.navigate(['/kontakt']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}
