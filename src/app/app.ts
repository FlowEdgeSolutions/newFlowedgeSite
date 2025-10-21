import { Component } from '@angular/core';
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
export class App {
  title = 'FlowEdge AI';
}
