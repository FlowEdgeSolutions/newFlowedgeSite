import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cal-booking',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cal-booking-wrapper">
      <div 
        #calContainer
        class="cal-inline" 
        id="my-cal-inline-erstgesprach-digitale-prozesse-automatisierung"
        style="width:100%;height:100%;min-height:600px;overflow:scroll"
      ></div>
    </div>
  `,
  styles: [`
    .cal-booking-wrapper {
      width: 100%;
      min-height: 600px;
      border-radius: 12px;
      overflow: hidden;
      background: var(--gray-50);
    }

    .cal-inline {
      width: 100%;
      height: 100%;
      min-height: 600px;
    }
  `]
})
export class CalBookingComponent implements OnInit, AfterViewInit {
  @ViewChild('calContainer', { static: false }) calContainer?: ElementRef;
  @Input() calLink: string = environment.calcom.defaultCalLink;
  @Input() theme: 'auto' | 'light' | 'dark' = 'auto';
  @Input() layout: 'month_view' | 'week_view' | 'column_view' = 'month_view';

  private scriptLoaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCalScript();
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Warte bis Script geladen ist, dann initialisiere
      const checkAndInit = () => {
        if ((window as any).Cal) {
          this.initializeCal();
        } else if (!this.scriptLoaded) {
          setTimeout(checkAndInit, 100);
        }
      };
      setTimeout(checkAndInit, 100);
    }
  }

  private loadCalScript() {
    // Prüfen ob Script bereits geladen ist
    if (document.querySelector('script[src*="cal.com/embed"]')) {
      this.scriptLoaded = true;
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      console.log('✅ Cal.com Script geladen');
      this.scriptLoaded = true;
    };
    script.onerror = () => {
      console.error('❌ Cal.com Script konnte nicht geladen werden');
    };
    document.head.appendChild(script);
  }

  private initializeCal() {
    if (!(window as any).Cal) {
      console.error('❌ Cal ist nicht verfügbar');
      return;
    }

    try {
      const Cal = (window as any).Cal;
      const namespace = 'erstgesprach-digitale-prozesse-automatisierung';
      
      console.log('🔄 Initialisiere Cal.com mit:', {
        calLink: this.calLink,
        namespace: namespace
      });

      // Cal.com mit namespace initialisieren
      Cal('init', namespace, { origin: 'https://app.cal.com' });

      // Inline-Kalender einbetten
      Cal.ns[namespace]('inline', {
        elementOrSelector: '#my-cal-inline-erstgesprach-digitale-prozesse-automatisierung',
        config: { layout: this.layout },
        calLink: this.calLink
      });

      // UI-Styling
      Cal.ns[namespace]('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#147dc8' },
          dark: { 'cal-brand': '#fafafa' }
        },
        hideEventTypeDetails: false,
        layout: this.layout
      });

      console.log('✅ Cal.com erfolgreich initialisiert');
    } catch (error) {
      console.error('❌ Fehler bei Cal.com Initialisierung:', error);
    }
  }
}
