import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule],
  template: `
    <div class="language-switcher" [attr.data-locale]="currentLocale" [attr.dir]="isRtl() ? 'rtl' : 'ltr'">
      <div class="language-dropdown" [class.open]="isDropdownOpen">
        <button class="current-language" 
                (click)="toggleDropdown()" 
                type="button"
                title="Language selection / Sprache auswählen">
          <span class="flag">{{ getCurrentLanguage().flag }}</span>
          <span class="lang-code">{{ getCurrentLanguage().code }}</span>
          <span class="chevron" [class.rotated]="isDropdownOpen">▼</span>
        </button>
        
        <ul class="language-list" [class.show]="isDropdownOpen" role="menu" [attr.dir]="isRtl() ? 'rtl' : 'ltr'">
          <li *ngFor="let lang of languages" 
              (click)="switchLanguage(lang.locale)"
              [class.active]="lang.locale === currentLocale"
              role="menuitem"
              [title]="'Switch to ' + lang.name">
            <span class="flag">{{ lang.flag }}</span>
            <span class="name">{{ lang.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .language-switcher {
      position: relative;
      z-index: 1000;
      display: block;
    }

    .language-dropdown {
      position: relative;
      display: block;
    }

    .current-language {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: #10388c;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
      min-width: 80px;
      justify-content: center;
    }

    .current-language:hover {
      background: #0d2f73;
    }

    .chevron {
      font-size: 12px;
      transition: transform 0.3s ease;
    }

    .chevron.rotated {
      transform: rotate(180deg);
    }

    .language-list {
      position: absolute;
      top: 100%;
      right: 0;
      background: white;
      border: 1px solid #e1e5e9;
      border-radius: 6px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      min-width: 140px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      list-style: none;
      margin: 0;
      padding: 8px 0;
      z-index: 9999;
    }

    .language-list.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .language-list li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      cursor: pointer;
      font-size: 14px;
      color: #333;
      transition: background-color 0.2s ease;
    }

    .language-list li:hover {
      background: #f8f9fa;
    }

    .language-list li.active {
      background: #e8f0ff;
      color: #10388c;
      font-weight: 500;
    }

    .flag {
      font-size: 16px;
    }

    .lang-code {
      font-weight: 500;
      text-transform: uppercase;
    }

    .name {
      font-weight: 400;
    }

    /* RTL support for Arabic */
    .language-list[dir="rtl"] {
      right: auto;
      left: 0;
    }

    .language-list[dir="rtl"] li {
      flex-direction: row-reverse;
    }
  `]
})
export class LanguageSwitcherComponent {
  isDropdownOpen = false;
  currentLocale = 'de'; // Default to German

  languages = [
    {
      locale: 'de',
      code: 'DE',
      name: 'Deutsch',
      flag: '🇩🇪'
    },
    {
      locale: 'en',
      code: 'EN',
      name: 'English',
      flag: '🇺🇸'
    },
    {
      locale: 'ar',
      code: 'AR',
      name: 'العربية',
      flag: '🇸🇦'
    }
  ];

  constructor() {
    // Detect current locale from URL or browser
    this.detectCurrentLocale();
    // Ensure document direction matches locale
    this.applyDirection();
    console.log('Language Switcher initialized with locale:', this.currentLocale);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    
    // Close dropdown when clicking outside
    if (this.isDropdownOpen) {
      setTimeout(() => {
        document.addEventListener('click', this.closeDropdown.bind(this), { once: true });
      }, 100);
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  switchLanguage(locale: string) {
    this.isDropdownOpen = false;
    
    // In a production app, you would switch to a different build
    // For now, we'll just reload the page with the appropriate locale
    const baseUrl = window.location.origin;
    const currentPath = window.location.pathname;
    
    // Remove any existing locale prefix
    const pathWithoutLocale = currentPath.replace(/^\/(de|en|ar)/, '');
    
    if (locale === 'de') {
      // German is the default, no prefix needed
      window.location.href = `${baseUrl}${pathWithoutLocale}`;
    } else {
      // For English and Arabic, add locale prefix
      window.location.href = `${baseUrl}/${locale}${pathWithoutLocale}`;
    }
  }

  getCurrentLanguage() {
    return this.languages.find(lang => lang.locale === this.currentLocale) || this.languages[0];
  }

  private detectCurrentLocale() {
    const path = window.location.pathname;
    if (path.startsWith('/en')) {
      this.currentLocale = 'en';
    } else if (path.startsWith('/ar')) {
      this.currentLocale = 'ar';
    } else {
      this.currentLocale = 'de';
    }
  }

  private applyDirection() {
    try {
      const html = document.documentElement;
      html.setAttribute('dir', this.isRtl() ? 'rtl' : 'ltr');
    } catch {}
  }

  isRtl(): boolean {
    return this.currentLocale === 'ar';
  }
}