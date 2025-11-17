import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CookieBannerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  title = 'FlowEdge Solutions';
  
  ngOnInit() {
    // Load Cal.com script globally
    this.loadCalComScript();
  }
  
  loadCalComScript() {
    // Check if script is already loaded
    if (typeof window !== 'undefined' && !(window as any).Cal) {
      const script = document.createElement('script');
      script.src = 'https://app.cal.com/embed/embed.js';
      script.async = true;
      script.onload = () => {
        // Initialize both floating button and prepare for inline calendar
        this.initializeCalCom();
      };
      document.head.appendChild(script);
    } else if ((window as any).Cal) {
      // If already loaded, just initialize
      this.initializeCalCom();
    }
  }
  
  initializeCalCom() {
    // Initialize Cal.com for floating button
    if (typeof window !== 'undefined' && (window as any).Cal) {
      const Cal = (window as any).Cal;
      
      // Make sure the namespace is initialized
      if (!Cal.ns["erstgesprach-digitale-prozesse-automatisierung"]) {
        Cal("init", "erstgesprach-digitale-prozesse-automatisierung", {origin:"https://app.cal.com"});
      }
      
      // Small delay to ensure proper initialization
      setTimeout(() => {
        try {
          // Initialize floating button
          Cal.ns["erstgesprach-digitale-prozesse-automatisierung"]("floatingButton", {
            "calLink":"flowedge/erstgesprach-digitale-prozesse-automatisierung",
            "config":{"layout":"month_view","theme":"auto"},
            "buttonText":"TERMIN BUCHEN",
            "hideButtonIcon":false,
            "buttonPosition":"bottom-left",
            "buttonColor":"#147dc8"
          }); 
          
          Cal.ns["erstgesprach-digitale-prozesse-automatisierung"]("ui", {
            "cssVarsPerTheme":{"light":{"cal-brand":"#147dc8"},"dark":{"cal-brand":"#fafafa"}},
            "hideEventTypeDetails":false,
            "layout":"month_view"
          });
          
          console.log("Cal.com floating button initialized successfully");
        } catch (e) {
          console.log("Cal.com floating button initialization failed", e);
        }
      }, 500);
    }
  }
}