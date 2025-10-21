# 📧 E-Mail Template Dokumentation

## FlowEdge Solutions - Professionelles E-Mail-Design

---

## 📁 Dateien

| Datei | Zweck | Verwendung |
|-------|-------|------------|
| [`email-template.html`](./email-template.html) | Vollständiges Template | Für eigene E-Mail-Server oder als Basis |
| [`email-preview.html`](./email-preview.html) | Interaktive Vorschau | Im Browser öffnen zum Testen |
| [`OUTLOOK_SETUP.md`](./OUTLOOK_SETUP.md) | EmailJS Setup-Anleitung | Enthält kompaktes Template für EmailJS |

---

## 🎨 Design-Features

### ✅ Corporate Identity
- **Farben**: Primary Dark (#10388c), Primary Light (#6095c6)
- **Schriftarten**: Space Grotesk (Headings), Poppins (Body)
- **Logo**: FlowEdge Solutions mit Tagline
- **Gradient**: Animierter Header mit Blau-Verlauf

### ✅ Moderne UI-Elemente
- 🎯 **Gradient Header** mit animiertem Hintergrund
- 📊 **Info-Cards** mit Glasmorphismus-Effekt
- 💬 **Message Box** mit Rahmen und Padding
- 🔘 **Call-to-Action Button** mit Gradient
- 📱 **Responsive Design** für alle Geräte

### ✅ Professionelle Struktur
1. **Header** - Logo + Tagline
2. **Titel** - "Neue Kontaktanfrage" Emoji
3. **Kontakt-Info** - Strukturierte Daten-Karte
4. **Nachricht** - Formatierte Message-Box
5. **Action Button** - "Jetzt antworten"
6. **Footer** - Firmeninfo + Links

---

## 🚀 Verwendung

### Option 1: EmailJS (Empfohlen)

Verwenden Sie das **kompakte Template** aus [`OUTLOOK_SETUP.md`](./OUTLOOK_SETUP.md):

1. Kopieren Sie das HTML aus Abschnitt "E-Mail-Inhalt"
2. Fügen Sie es in EmailJS Template Editor ein
3. Die Variablen `{{from_name}}`, `{{from_email}}`, etc. werden automatisch ersetzt

### Option 2: Eigener E-Mail-Server

Verwenden Sie [`email-template.html`](./email-template.html):

1. Passen Sie die Template-Variablen an Ihr System an
2. Integrieren Sie es in Ihren E-Mail-Versand-Service
3. Stellen Sie sicher, dass Google Fonts geladen werden können

---

## 🧪 Vorschau testen

### Live-Vorschau im Browser:

1. Öffnen Sie [`email-preview.html`](./email-preview.html) im Browser
2. Füllen Sie die Test-Daten aus
3. Klicken Sie auf "Vorschau aktualisieren"
4. Sehen Sie das Ergebnis in Echtzeit

**Alternativ:**
```bash
# Im Projektverzeichnis
start email-preview.html
# oder
open email-preview.html  # macOS
xdg-open email-preview.html  # Linux
```

---

## 📋 Template-Variablen

Diese Variablen werden automatisch durch EmailJS ersetzt:

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `{{from_name}}` | Name des Absenders | Max Mustermann |
| `{{from_email}}` | E-Mail-Adresse | max@beispiel.de |
| `{{company}}` | Firmenname | Beispiel GmbH |
| `{{phone}}` | Telefonnummer | +49 123 456789 |
| `{{message}}` | Nachrichtentext | Hallo, ich... |

---

## 🎯 E-Mail-Client Kompatibilität

### ✅ Getestet in:
- Outlook (Web & Desktop)
- Gmail (Web & App)
- Apple Mail
- Thunderbird
- Mobile Clients (iOS, Android)

### ⚠️ Hinweise:
- **Google Fonts**: Werden in den meisten Clients geladen
- **Animationen**: Funktionieren nur in modernen Web-Clients
- **Gradient**: Fallback zu Solid-Color bei älteren Clients
- **Inline-Styles**: Verwendet für maximale Kompatibilität

---

## 🔧 Anpassungen

### Farben ändern:

```css
/* Primary Dark: #10388c → Ihre Farbe */
background: linear-gradient(135deg, #10388c, #6095c6);

/* Primary Light: #6095c6 → Ihre Farbe */
color: #6095c6;
```

### Logo ersetzen:

```html
<!-- Aktuell: Text-Logo -->
<h1 class="logo-text">FlowEdge Solutions</h1>

<!-- Mit Bild: -->
<img src="https://ihre-domain.de/logo.png" alt="FlowEdge Solutions" style="height: 60px;">
```

### Schriftarten ändern:

```css
/* Google Fonts Import anpassen */
@import url('https://fonts.googleapis.com/css2?family=IhreSchrift:wght@400;600;700&display=swap');

/* Font-Family ändern */
font-family: 'IhreSchrift', Arial, sans-serif;
```

---

## 📊 Performance

### Größe:
- **HTML**: ~10 KB
- **Mit CSS**: ~15 KB
- **Komprimiert**: ~5 KB

### Ladezeit:
- **Ohne Bilder**: < 1 Sekunde
- **Mit Google Fonts**: < 2 Sekunden
- **Mobile**: < 3 Sekunden

---

## 🔒 Datenschutz & DSGVO

### ✅ Konform:
- Keine Tracking-Pixel
- Keine externen Scripts
- Nur Google Fonts (optional)
- Klare Absenderinformation
- Footer mit Impressum-Link

### Empfehlung:
Fügen Sie im Footer hinzu:
```html
<a href="https://ihre-domain.de/datenschutz">Datenschutzerklärung</a>
```

---

## 🎨 Design-Prinzipien

1. **Klarheit**: Strukturierte Informationsdarstellung
2. **Professionalität**: Corporate Design durchgängig
3. **Lesbarkeit**: Optimierte Typografie
4. **Responsive**: Funktioniert auf allen Geräten
5. **Barrierefreiheit**: Hoher Kontrast, klare Hierarchie

---

## 📞 Support

Bei Fragen zum Template:
- 📧 E-Mail: info@flowedge.de
- 📖 Dokumentation: Siehe OUTLOOK_SETUP.md
- 🔍 EmailJS Docs: https://www.emailjs.com/docs/

---

## ✨ Changelog

### Version 1.0 (Januar 2025)
- ✅ Initiale Version
- ✅ Corporate Design FlowEdge Solutions
- ✅ Responsive Layout
- ✅ EmailJS Integration
- ✅ Outlook-kompatibel

---

**© 2025 FlowEdge Solutions**  
*Erstellt mit ❤️ für professionelle Business-Kommunikation*
