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
  openDropdowns = signal<Set<string>>(new Set());

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

  showDropdown(dropdownId: string) {
    this.openDropdowns.update(dropdowns => {
      const newDropdowns = new Set(dropdowns);
      newDropdowns.add(dropdownId);
      return newDropdowns;
    });
  }

  hideDropdown(dropdownId: string) {
    this.openDropdowns.update(dropdowns => {
      const newDropdowns = new Set(dropdowns);
      newDropdowns.delete(dropdownId);
      return newDropdowns;
    });
  }

  isDropdownOpen(dropdownId: string): boolean {
    return this.openDropdowns().has(dropdownId);
  }

  navigateToSolution(solution: string) {
    // Navigation zu spezifischen Lösungsseiten
    let route = '/loesungen';
    
    switch(solution) {
      case 'voiceaider':
        route = '/loesungen/voice-agent';
        break;
      case 'medaider':
        route = '/loesungen/med-agent';
        break;
      case 'writeaider':
        route = '/loesungen/write-agent';
        break;
      default:
        route = '/loesungen';
    }
    
    this.router.navigate([route]).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    this.openDropdowns.set(new Set());
    this.closeMobileMenu();
  }
}
