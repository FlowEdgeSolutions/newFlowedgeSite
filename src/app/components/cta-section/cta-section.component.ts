import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss'
})
export class CtaSectionComponent {
  constructor(private router: Router) {}

  scrollToContact() {
    this.router.navigate(['/kontakt']).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}
