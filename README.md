# FlowEdge Solutions

Eine moderne, professionelle Website fÃ¼r IT-Beratung, Prozessautomatisierung und KI-Entwicklung.

## ðŸŽ¨ Design-System

### Farbschema (Corporate Blue)
- **Primary Dark**: `#10388c` - Hauptfarbe fÃ¼r Buttons und Ãœberschriften
- **Primary Light**: `#6095c6` - Hover-Effekte und sekundÃ¤re Akzente
- **Accent**: `#6095c6` - Call-to-Action Elemente
- **Background**: `#ffffff` - Haupthintergrund
- **Text Dark**: `#282f3d` - PrimÃ¤re Textfarbe

### Technologie-Stack
- **Framework**: Angular 19+ (zoneless)
- **Styling**: SCSS mit Custom Design-System
- **TypeScript**: Standalone Components
- **Responsive**: Mobile-First Ansatz

## ðŸš€ Entwicklung

### Installation
```bash
cd angular_flowedge
npm install
```

### Development Server
```bash
npm start
```
Die Anwendung lÃ¤uft auf `http://localhost:4200`

### Build
```bash
npm run build
```

## ðŸ“¦ Komponenten

### Haupt-Sektionen
1. **Hero** - Einstiegsbereich mit animierter 3D-Sphere
2. **Strategy** - KI-Strategie vom Konzept zur Entscheidung
3. **Implementation** - Technische Umsetzung
4. **Change** - Change Management & DSGVO
5. **Industries** - Branchen-Schwerpunkte
6. **Metrics** - Kennzahlen und Erfolge
7. **CTA** - Call-to-Action Sektion
8. **Contact** - Kontaktformular
9. **Footer** - Footer mit Links und Social Media

### Features
- âœ… Responsive Design fÃ¼r alle GerÃ¤te
- âœ… Smooth Scroll-Navigation
- âœ… Animierte ÃœbergÃ¤nge
- âœ… Moderne UI mit Corporate Blue Theme
- âœ… SEO-optimiert
- âœ… DSGVO-konform mit Cookie-Banner
- âœ… Kontaktformular mit E-Mail-Integration (EmailJS)

## ðŸ“§ E-Mail-Backend einrichten

Das Kontaktformular nutzt EmailJS fuer die Zustellung der Anfragen.

### Quick Setup fÃ¼r Microsoft Outlook:
ðŸ“š **AusfÃ¼hrliche Anleitung**: Siehe [`OUTLOOK_SETUP.md`](./OUTLOOK_SETUP.md)

**Kurzversion:**
1. Registrieren auf [EmailJS.com](https://www.emailjs.com/)
2. Microsoft Outlook Account verbinden
3. E-Mail-Template erstellen
4. IDs in `src/app/services/email.service.ts` eintragen:
   ```typescript
   private readonly SERVICE_ID = 'IHRE_SERVICE_ID';
   private readonly TEMPLATE_ID = 'IHRE_TEMPLATE_ID';
   private readonly PUBLIC_KEY = 'IHR_PUBLIC_KEY';
   ```
5. Testen und deployen!

### Alternative E-Mail-Provider:
ðŸ“š **Allgemeine Anleitung**: Siehe [`EMAIL_SETUP.md`](./EMAIL_SETUP.md)  
(UnterstÃ¼tzt: Gmail, Outlook, SendGrid, und mehr)

## ðŸ“‹ Rechtliche Seiten

- **Impressum**: `/impressum` - VollstÃ¤ndige Unternehmensdaten
- **Datenschutz**: `/datenschutz` - DSGVO-konforme DatenschutzerklÃ¤rung
- **AGB**: `/agb` - Allgemeine GeschÃ¤ftsbedingungen
- **Cookie-Banner**: Automatischer DSGVO-konformer Cookie-Banner

## ðŸ“¦ Deployment

### Vercel Deployment

Das Projekt ist fÃ¼r Vercel optimiert:

```bash
npm run build
```

**Vercel Konfiguration:**
- **Build command**: `npm run build`
- **Output directory**: `dist/angular_FlowEdge_AI/browser`
- **Node version**: 20.x oder hoeher

**Nach dem Deployment:**
1. SPA-Routing ist ueber `vercel.json` aktiv
2. Cookie-Banner funktioniert sofort
3. E-Mail-Backend nach EmailJS-Setup aktiv

## ï¿½ VoiceAider AI Demos

- Marketingseite: `/loesungen/voiceaider-ai`
- Interaktive Demo (Screenshots nachgebaut): `/loesungen/voiceaider-ai-demo`

Die Demo ist rein statisch und dient als UI-Vorschau mit Tabs (Use Case, Flow Designer, Knowledge Base, Actions, Test Calls).

## ï¿½ðŸ“ž Kontakt

**FlowEdge Solutions**
- **Inhaber**: Khaled Ayub
- **Adresse**: KÃ¶nigsallee 63, 40215 DÃ¼sseldorf
- **E-Mail**: info@flowedge.de
- **Telefon**: +49 15560 814 385
- **LinkedIn**: [FlowEdge Solutions](https://www.linkedin.com/company/flow-edge-solutions/)

## ðŸ“ Lizenz

Â© 2025 FlowEdge Solutions Â· Alle Rechte vorbehalten



