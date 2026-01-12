# ­ƒôº E-Mail Backend Einrichtung

Dieses Projekt verwendet **EmailJS** f├╝r den E-Mail-Versand aus dem Kontaktformular. Hier ist die Schritt-f├╝r-Schritt-Anleitung zur Einrichtung.

---

## ­ƒöº Schritt 1: EmailJS Account erstellen

1. Gehen Sie zu [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klicken Sie auf **"Sign Up"** und erstellen Sie einen kostenlosen Account
3. Best├ñtigen Sie Ihre E-Mail-Adresse

---

## ­ƒô¼ Schritt 2: E-Mail-Service verbinden

1. Nach dem Login gehen Sie zu **"Email Services"**
2. Klicken Sie auf **"Add New Service"**
3. W├ñhlen Sie Ihren E-Mail-Provider (z.B. Gmail, Outlook, etc.)
4. Folgen Sie den Anweisungen zur Verkn├╝pfung Ihres E-Mail-Accounts
5. **Notieren Sie sich die `Service ID`** (z.B. `service_abc123`)

### Empfohlene Provider:
- **Gmail** - Einfach einzurichten
- **Outlook/Office365** - F├╝r Gesch├ñftskonten
- **SendGrid** - F├╝r hohe Volumina

---

## ­ƒôØ Schritt 3: E-Mail-Template erstellen

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
Neue Nachricht ├╝ber das Kontaktformular:

Von: {{from_name}}
E-Mail: {{from_email}}
Unternehmen: {{company}}
Telefon: {{phone}}

Nachricht:
{{message}}

---
Diese E-Mail wurde automatisch ├╝ber das FlowEdge Solutions Kontaktformular gesendet.
```

4. Klicken Sie auf **"Save"**
5. **Notieren Sie sich die `Template ID`** (z.B. `template_xyz789`)

---

## ­ƒöæ Schritt 4: Public Key abrufen

1. Gehen Sie zu **"Account"** ÔåÆ **"General"**
2. Im Abschnitt **"API Keys"** finden Sie Ihren **Public Key**
3. **Notieren Sie sich den `Public Key`** (z.B. `user_pqr456`)

---

## ÔÜÖ´©Å Schritt 5: Konfiguration in Angular eintragen

├ûffnen Sie die Datei:
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

## ­ƒÄ» Schritt 6: E-Mail-Empf├ñnger konfigurieren

In der gleichen Datei (`email.service.ts`) k├Ânnen Sie die Empf├ñnger-E-Mail anpassen:

```typescript
to_email: 'info@flowedge.de' // Ihre E-Mail-Adresse
```

---

## ­ƒº¬ Schritt 7: Testen

1. Starten Sie die Anwendung lokal:
   ```bash
   ng serve
   ```

2. Navigieren Sie zur Kontaktseite: `http://localhost:4200/kontakt`

3. F├╝llen Sie das Formular aus und senden Sie eine Test-Nachricht

4. ├£berpr├╝fen Sie Ihr E-Mail-Postfach (auch Spam-Ordner!)

---

## ­ƒôè Kostenlose Limits

### EmailJS Free Tier:
- Ô£à 200 E-Mails pro Monat
- Ô£à 2 E-Mail-Services
- Ô£à 1 E-Mail-Template

---

## ­ƒöÆ Sicherheit

### Wichtige Hinweise:

1. Ô£à **Public Key ist sicher**: Der EmailJS Public Key kann im Frontend-Code bleiben
2. Ô£à **Kein API-Secret n├Âtig**: EmailJS verwendet OAuth f├╝r Gmail/Outlook
3. ÔÜá´©Å **Rate Limiting**: EmailJS hat automatisches Rate Limiting gegen Missbrauch

---

## ­ƒÜÇ Deployment-Checklist

Vor dem Deployment:

- [ ] EmailJS Service ID eingetragen
- [ ] EmailJS Template ID eingetragen
- [ ] EmailJS Public Key eingetragen
- [ ] E-Mail-Empf├ñnger konfiguriert
- [ ] Lokaler Test erfolgreich
- [ ] Spam-Benachrichtigungen konfiguriert

---

## ­ƒåÿ Troubleshooting

### Problem: E-Mails kommen nicht an

**L├Âsung 1:** ├£berpr├╝fen Sie Spam-Ordner
**L├Âsung 2:** Pr├╝fen Sie EmailJS Dashboard ÔåÆ "Logs"
**L├Âsung 3:** Testen Sie die E-Mail-Verbindung in EmailJS

### Problem: "Invalid template ID"

**L├Âsung:** Template ID nochmal aus EmailJS Dashboard kopieren

### Problem: CORS-Fehler

**L├Âsung:** EmailJS erlaubt alle Origins standardm├ñ├ƒig - ├╝berpr├╝fen Sie Ihre Service-Konfiguration

---

## ­ƒô× Support

Bei Fragen:
- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

---

**Stand:** Januar 2025
**FlowEdge Solutions**

