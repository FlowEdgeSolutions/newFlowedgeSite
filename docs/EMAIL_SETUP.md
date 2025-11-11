# 📧 E-Mail Backend Einrichtung

Dieses Projekt verwendet **EmailJS** für den E-Mail-Versand aus dem Kontaktformular. Hier ist die Schritt-für-Schritt-Anleitung zur Einrichtung.

---

## 🔧 Schritt 1: EmailJS Account erstellen

1. Gehen Sie zu [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klicken Sie auf **"Sign Up"** und erstellen Sie einen kostenlosen Account
3. Bestätigen Sie Ihre E-Mail-Adresse

---

## 📬 Schritt 2: E-Mail-Service verbinden

1. Nach dem Login gehen Sie zu **"Email Services"**
2. Klicken Sie auf **"Add New Service"**
3. Wählen Sie Ihren E-Mail-Provider (z.B. Gmail, Outlook, etc.)
4. Folgen Sie den Anweisungen zur Verknüpfung Ihres E-Mail-Accounts
5. **Notieren Sie sich die `Service ID`** (z.B. `service_abc123`)

### Empfohlene Provider:
- **Gmail** - Einfach einzurichten
- **Outlook/Office365** - Für Geschäftskonten
- **SendGrid** - Für hohe Volumina

---

## 📝 Schritt 3: E-Mail-Template erstellen

1. Gehen Sie zu **"Email Templates"**
2. Klicken Sie auf **"Create New Template"**
3. Verwenden Sie folgendes Template:

### Template-Inhalt:

**Subject:**
```
Neue Kontaktanfrage von {{from_name}}
```

**Body:**
```
Neue Nachricht über das Kontaktformular:

Von: {{from_name}}
E-Mail: {{from_email}}
Unternehmen: {{company}}
Telefon: {{phone}}

Nachricht:
{{message}}

---
Diese E-Mail wurde automatisch über das FlowEdge Solutions Kontaktformular gesendet.
```

4. Klicken Sie auf **"Save"**
5. **Notieren Sie sich die `Template ID`** (z.B. `template_xyz789`)

---

## 🔑 Schritt 4: Public Key abrufen

1. Gehen Sie zu **"Account"** → **"General"**
2. Im Abschnitt **"API Keys"** finden Sie Ihren **Public Key**
3. **Notieren Sie sich den `Public Key`** (z.B. `user_pqr456`)

---

## ⚙️ Schritt 5: Konfiguration in Angular eintragen

Öffnen Sie die Datei:
```
src/app/services/email.service.ts
```

Ersetzen Sie die Platzhalter mit Ihren Werten:

```typescript
private readonly SERVICE_ID = 'service_abc123';     // Ihre Service ID
private readonly TEMPLATE_ID = 'template_xyz789';   // Ihre Template ID
private readonly PUBLIC_KEY = 'user_pqr456';        // Ihr Public Key
```

---

## 🎯 Schritt 6: E-Mail-Empfänger konfigurieren

In der gleichen Datei (`email.service.ts`) können Sie die Empfänger-E-Mail anpassen:

```typescript
to_email: 'info@flowedge.de' // Ihre E-Mail-Adresse
```

---

## 🧪 Schritt 7: Testen

1. Starten Sie die Anwendung lokal:
   ```bash
   ng serve
   ```

2. Navigieren Sie zur Kontaktseite: `http://localhost:4200/kontakt`

3. Füllen Sie das Formular aus und senden Sie eine Test-Nachricht

4. Überprüfen Sie Ihr E-Mail-Postfach (auch Spam-Ordner!)

---

## 🌐 Netlify Forms als Fallback

Zusätzlich zu EmailJS ist **Netlify Forms** als Fallback konfiguriert:

### Netlify Forms Einrichtung:

1. Nach dem Deployment auf Netlify gehen Sie zu:
   **Site settings → Forms**

2. Aktivieren Sie **Form notifications**

3. Fügen Sie Ihre E-Mail-Adresse hinzu für Benachrichtigungen

4. Alle Formular-Einreichungen werden auch im Netlify Dashboard unter **"Forms"** gespeichert

---

## 📊 Kostenlose Limits

### EmailJS Free Tier:
- ✅ 200 E-Mails pro Monat
- ✅ 2 E-Mail-Services
- ✅ 1 E-Mail-Template

### Netlify Forms Free Tier:
- ✅ 100 Formular-Einreichungen pro Monat
- ✅ Spam-Filterung inklusive
- ✅ Export als CSV möglich

---

## 🔒 Sicherheit

### Wichtige Hinweise:

1. ✅ **Public Key ist sicher**: Der EmailJS Public Key kann im Frontend-Code bleiben
2. ✅ **Kein API-Secret nötig**: EmailJS verwendet OAuth für Gmail/Outlook
3. ⚠️ **Rate Limiting**: EmailJS hat automatisches Rate Limiting gegen Missbrauch
4. ⚠️ **Spam-Schutz**: Netlify Forms hat eingebauten Spam-Schutz (Honeypot-Field)

---

## 🚀 Deployment-Checklist

Vor dem Deployment:

- [ ] EmailJS Service ID eingetragen
- [ ] EmailJS Template ID eingetragen
- [ ] EmailJS Public Key eingetragen
- [ ] E-Mail-Empfänger konfiguriert
- [ ] Lokaler Test erfolgreich
- [ ] Netlify Forms aktiviert
- [ ] Spam-Benachrichtigungen konfiguriert

---

## 🆘 Troubleshooting

### Problem: E-Mails kommen nicht an

**Lösung 1:** Überprüfen Sie Spam-Ordner
**Lösung 2:** Prüfen Sie EmailJS Dashboard → "Logs"
**Lösung 3:** Testen Sie die E-Mail-Verbindung in EmailJS

### Problem: "Invalid template ID"

**Lösung:** Template ID nochmal aus EmailJS Dashboard kopieren

### Problem: CORS-Fehler

**Lösung:** EmailJS erlaubt alle Origins standardmäßig - überprüfen Sie Ihre Service-Konfiguration

---

## 📞 Support

Bei Fragen:
- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Netlify Forms Docs: [https://docs.netlify.com/forms/setup/](https://docs.netlify.com/forms/setup/)

---

**Stand:** Januar 2025
**FlowEdge Solutions**
