import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { MissionTeaserComponent } from './components/mission-teaser/mission-teaser.component';
import { WaveDividerComponent } from './components/wave-divider/wave-divider.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';
import { SolutionsComponent as SolutionsPageComponent } from './pages/solutions/solutions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';
import { AgbComponent } from './pages/agb/agb.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { VoiceaiderAi } from './pages/voiceaider-ai/voiceaider-ai';
import { VoiceaiderAiDemoComponent } from './pages/voiceaider-ai-demo/voiceaider-ai-demo';

// Main Home Component
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SolutionsComponent,
    CtaSectionComponent,
    MissionTeaserComponent,
    WaveDividerComponent,
    ContactFormComponent
  ],
  template: `
    <main>
      <app-hero></app-hero>
      <app-solutions></app-solutions>
      <app-cta-section></app-cta-section>
      <app-mission-teaser></app-mission-teaser>
      <app-wave-divider></app-wave-divider>
      <app-contact-form></app-contact-form>
    </main>
  `
})
export class HomeComponent {}

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'philosophie', component: PhilosophyComponent },
  { path: 'loesungen', component: SolutionsPageComponent },
  { path: 'loesungen/voiceaider-ai', component: VoiceaiderAi },
  { path: 'loesungen/voice-agent', component: VoiceaiderAi },
  { path: 'loesungen/voiceaider-ai-demo', component: VoiceaiderAiDemoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'agb', component: AgbComponent },
  { path: 'ueber-uns', component: PhilosophyComponent },
  { path: 'ressourcen', component: BlogComponent },
  { path: 'branchen/health-ai', component: BlogComponent },
  { path: 'branchen/legal-ai', component: BlogComponent },
  { path: 'beratung/ki-strategie', component: BlogComponent },
  { path: 'beratung/it-integration', component: BlogComponent },
  { path: 'loesungen/med-agent', component: SolutionsPageComponent },
  { path: 'loesungen/write-agent', component: SolutionsPageComponent }
];
