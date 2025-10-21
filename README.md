# FlowEdge Solutions

Eine moderne, professionelle Website für IT-Beratung, Prozessautomatisierung und KI-Entwicklung.

## 🎨 Design-System

### Farbschema (Corporate Blue)
- **Primary Dark**: `#10388c` - Hauptfarbe für Buttons und Überschriften
- **Primary Light**: `#6095c6` - Hover-Effekte und sekundäre Akzente
- **Accent**: `#6095c6` - Call-to-Action Elemente
- **Background**: `#ffffff` - Haupthintergrund
- **Text Dark**: `#282f3d` - Primäre Textfarbe

### Technologie-Stack
- **Framework**: Angular 19+ (zoneless)
- **Styling**: SCSS mit Custom Design-System
- **TypeScript**: Standalone Components
- **Responsive**: Mobile-First Ansatz

## 🚀 Entwicklung

### Installation
```bash
cd angular_flowedge
npm install
```

### Development Server
```bash
npm start
```
Die Anwendung läuft auf `http://localhost:4200`

### Build
```bash
npm run build
```

## 📦 Komponenten

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
- ✅ Responsive Design für alle Geräte
- ✅ Smooth Scroll-Navigation
- ✅ Animierte Übergänge
- ✅ Moderne UI mit Corporate Blue Theme
- ✅ SEO-optimiert
- ✅ DSGVO-konform mit Cookie-Banner
- ✅ Kontaktformular mit E-Mail-Integration (EmailJS + Netlify Forms)

## 📧 E-Mail-Backend einrichten

Das Kontaktformular verwendet ein Dual-System:
1. **Primär**: EmailJS (direkte E-Mail-Zustellung)
2. **Fallback**: Netlify Forms (zuverlässige Datenspeicherung)

### Quick Setup für Microsoft Outlook:
📚 **Ausführliche Anleitung**: Siehe [`OUTLOOK_SETUP.md`](./OUTLOOK_SETUP.md)

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
📚 **Allgemeine Anleitung**: Siehe [`EMAIL_SETUP.md`](./EMAIL_SETUP.md)  
(Unterstützt: Gmail, Outlook, SendGrid, und mehr)

## 📋 Rechtliche Seiten

- **Impressum**: `/impressum` - Vollständige Unternehmensdaten
- **Datenschutz**: `/datenschutz` - DSGVO-konforme Datenschutzerklärung
- **AGB**: `/agb` - Allgemeine Geschäftsbedingungen
- **Cookie-Banner**: Automatischer DSGVO-konformer Cookie-Banner

## 📦 Deployment

### Netlify Deployment

Das Projekt ist für Netlify optimiert:

```bash
npm run build
```

**Netlify Konfiguration:**
- **Build command**: `npm run build`
- **Publish directory**: `dist/angular_flowedge/browser`
- **Node version**: 18.x oder höher

**Nach dem Deployment:**
1. Netlify Forms wird automatisch aktiviert
2. Cookie-Banner funktioniert sofort
3. E-Mail-Backend nach EmailJS-Setup aktiv

## 📞 Kontakt

**FlowEdge Solutions**
- **Inhaber**: Khaled Ayub
- **Adresse**: Königsallee 63, 40215 Düsseldorf
- **E-Mail**: info@flowedge.de
- **Telefon**: +49 15560 814 385
- **LinkedIn**: [FlowEdge Solutions](https://www.linkedin.com/company/flow-edge-solutions/)

## 📝 Lizenz

© 2025 FlowEdge Solutions · Alle Rechte vorbehalten
