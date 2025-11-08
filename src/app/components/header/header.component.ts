import { Component, signal, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  isDropdownOpen = signal(false);

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(value => !value);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMobileMenuOpen.set(false);
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  navigateToHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }

  showDropdown() {
    this.isDropdownOpen.set(true);
  }

  hideDropdown() {
    this.isDropdownOpen.set(false);
  }

  navigateToSolution(solution: string) {
    // Hier können Sie später zu spezifischen Lösungsseiten navigieren
    this.router.navigate(['/loesungen'], { fragment: solution }).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    this.isDropdownOpen.set(false);
    this.closeMobileMenu();
  }
}
