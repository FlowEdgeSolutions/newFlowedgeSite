# 📧 EmailJS mit Microsoft Outlook einrichten

**Schnellanleitung für FlowEdge Solutions Kontaktformular**

---

## ⚡ Quick Setup (5 Minuten)

### **Schritt 1: EmailJS Account erstellen**

1. 🌐 Öffnen Sie: [https://www.emailjs.com/](https://www.emailjs.com/)
2. 🔐 Klicken Sie auf **"Sign Up"**
3. ✉️ Verwenden Sie Ihre Microsoft E-Mail zur Registrierung
4. ✅ Bestätigen Sie Ihre E-Mail-Adresse

---

### **Schritt 2: Microsoft Outlook verbinden**

1. Im EmailJS Dashboard → **"Email Services"**
2. Klicken Sie auf **"Add New Service"**
3. Wählen Sie **"Outlook"** oder **"Office365"**

   ![Outlook auswählen](https://www.emailjs.com/static/img/providers/outlook.png)

4. Klicken Sie auf **"Connect Account"**
5. Sie werden zu Microsoft weitergeleitet:
   - ✅ Melden Sie sich mit Ihrem Microsoft-Account an
   - ✅ Erlauben Sie EmailJS den Zugriff (nur Lese-/Schreibrechte für E-Mails)

6. 📝 **Notieren Sie sich die `Service ID`** (wird angezeigt)
   - Beispiel: `service_outlook123abc`

---

### **Schritt 3: E-Mail-Template erstellen**

1. Gehen Sie zu **"Email Templates"**
2. Klicken Sie auf **"Create New Template"**
3. **Template-Name**: `kontaktformular_flowedge`

#### **E-Mail-Betreff:**
```
Neue Kontaktanfrage von {{from_name}}
```

#### **E-Mail-Inhalt (HTML):**

Kopieren Sie diesen Code in das Template:

**Option 1: Kompaktes Template (Empfohlen für EmailJS)**

```html
<div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #10388c 0%, #6095c6 100%); padding: 40px 30px; text-align: center;">
    <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 32px; font-weight: 700; color: #ffffff; margin: 0; letter-spacing: -0.02em;">FlowEdge Solutions</h1>
    <p style="font-size: 14px; color: rgba(255, 255, 255, 0.9); margin: 8px 0 0 0;">Effektiv · Strategisch · Individuell</p>
  </div>

  <!-- Content -->
  <div style="padding: 40px 30px;">
    <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 24px; font-weight: 700; color: #10388c; margin: 0 0 24px 0;">🎯 Neue Kontaktanfrage</h2>
    
    <!-- Info Card -->
    <div style="background: linear-gradient(135deg, rgba(16, 56, 140, 0.03), rgba(96, 149, 198, 0.05)); border-left: 4px solid #10388c; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <div style="margin-bottom: 16px;">
        <div style="font-size: 12px; font-weight: 600; color: rgba(16, 56, 140, 0.7); text-transform: uppercase; margin-bottom: 4px;">VON</div>
        <div style="font-size: 16px; font-weight: 600; color: #282f3d;">{{from_name}}</div>
      </div>
      
      <div style="margin-bottom: 16px;">
        <div style="font-size: 12px; font-weight: 600; color: rgba(16, 56, 140, 0.7); text-transform: uppercase; margin-bottom: 4px;">E-MAIL</div>
        <div style="font-size: 16px; font-weight: 600;">
          <a href="mailto:{{from_email}}" style="color: #10388c; text-decoration: none;">{{from_email}}</a>
        </div>
      </div>
      
      <div style="margin-bottom: 16px;">
        <div style="font-size: 12px; font-weight: 600; color: rgba(16, 56, 140, 0.7); text-transform: uppercase; margin-bottom: 4px;">UNTERNEHMEN</div>
        <div style="font-size: 16px; font-weight: 600; color: #282f3d;">{{company}}</div>
      </div>
      
      <div>
        <div style="font-size: 12px; font-weight: 600; color: rgba(16, 56, 140, 0.7); text-transform: uppercase; margin-bottom: 4px;">TELEFON</div>
        <div style="font-size: 16px; font-weight: 600;">
          <a href="tel:{{phone}}" style="color: #10388c; text-decoration: none;">{{phone}}</a>
        </div>
      </div>
    </div>
    
    <!-- Message -->
    <div style="background: #ffffff; border: 2px solid rgba(96, 149, 198, 0.2); border-radius: 12px; padding: 24px; margin-top: 24px;">
      <span style="font-size: 14px; font-weight: 600; color: #10388c; margin-bottom: 12px; display: block;">💬 Nachricht:</span>
      <div style="font-size: 15px; line-height: 1.7; color: #282f3d; white-space: pre-wrap;">{{message}}</div>
    </div>
    
    <!-- Button -->
    <div style="text-align: center; margin: 32px 0 24px;">
      <a href="mailto:{{from_email}}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #10388c, #6095c6); color: #ffffff; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 15px; box-shadow: 0 8px 24px rgba(16, 56, 140, 0.25);">
        Jetzt antworten
      </a>
    </div>
  </div>
  
  <!-- Footer -->
  <div style="background: #f8faff; padding: 32px 30px; border-top: 1px solid rgba(96, 149, 198, 0.2); text-align: center;">
    <p style="font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; color: #10388c; margin: 0 0 8px 0;">FlowEdge Solutions</p>
    <p style="font-size: 13px; color: rgba(40, 47, 61, 0.7); line-height: 1.6; margin: 0;">
      Inhaber: Khaled Ayub<br>
      Königsallee 63 · 40215 Düsseldorf<br>
      <a href="tel:+4915560814385" style="color: #6095c6; text-decoration: none;">+49 15560 814 385</a> · 
      <a href="mailto:info@flowedge.de" style="color: #6095c6; text-decoration: none;">info@flowedge.de</a>
    </p>
    <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(96, 149, 198, 0.3), transparent); margin: 20px 0;"></div>
    <p style="font-size: 12px; color: rgba(40, 47, 61, 0.6); margin: 0; line-height: 1.5;">
      Diese E-Mail wurde automatisch über das FlowEdge Solutions Kontaktformular gesendet.<br>
      © 2025 FlowEdge Solutions · Alle Rechte vorbehalten
    </p>
  </div>
</div>
```

**Option 2: Vollständiges Template mit Animationen**

Für das vollständige Template mit CSS-Animationen siehe:
📝 [`email-template.html`](./email-template.html)

Dieses enthält:
- ✅ Animierte Header mit Gradient-Effekten
- ✅ Responsive Design
- ✅ Professionelle Typografie (Space Grotesk + Poppins)
- ✅ Corporate Design FlowEdge Solutions

4. **Test senden**: Klicken Sie auf **"Test it"** um das Template zu testen
5. 📝 **Notieren Sie die `Template ID`** (wird angezeigt)
   - Beispiel: `template_contact789xyz`

---

### **Schritt 4: Public Key abrufen**

1. Gehen Sie zu **"Account"** (oben rechts) → **"General"**
2. Scrollen Sie zu **"API Keys"**
3. 📝 **Kopieren Sie Ihren `Public Key`**
   - Beispiel: `abcdefghijk123456`

---

### **Schritt 5: IDs in Angular-Projekt eintragen**

Öffnen Sie:
```
src/app/services/email.service.ts
```

Ersetzen Sie die Platzhalter (Zeile 14-16):

```typescript
private readonly SERVICE_ID = 'service_outlook123abc';    // Ihre Service ID
private readonly TEMPLATE_ID = 'template_contact789xyz';  // Ihre Template ID
private readonly PUBLIC_KEY = 'abcdefghijk123456';        // Ihr Public Key
```

✅ **Speichern Sie die Datei**

---

### **Schritt 6: Testen**

#### **Lokal testen:**

```bash
ng serve
```

1. Öffnen Sie: `http://localhost:4200/kontakt`
2. Füllen Sie das Formular aus
3. Klicken Sie auf **"Nachricht senden"**
4. ⏳ Warten Sie auf "Nachricht gesendet!" 
5. 📧 Prüfen Sie Ihr Outlook-Postfach

#### **Nach Deployment testen:**

Nach dem Netlify-Deployment:
- Besuchen Sie Ihre Live-Website: `https://ihre-domain.netlify.app/kontakt`
- Senden Sie eine Test-Nachricht
- Prüfen Sie Outlook (auch Spam-Ordner!)

---

## 🎯 Ihre Konfiguration auf einen Blick

Nach Abschluss sollten Sie haben:

| Was | Beispiel | Wo zu finden |
|-----|----------|--------------|
| **Service ID** | `service_outlook123abc` | EmailJS → Email Services |
| **Template ID** | `template_contact789xyz` | EmailJS → Email Templates |
| **Public Key** | `abcdefghijk123456` | EmailJS → Account → General |
| **Empfänger** | `info@flowedge.de` | Ihr Microsoft-Account |

---

## 🔧 Troubleshooting

### ❌ Problem: "Authentication failed"

**Lösung:**
1. Gehen Sie zu EmailJS → Email Services
2. Klicken Sie bei Ihrem Outlook-Service auf **"Reconnect"**
3. Autorisieren Sie erneut bei Microsoft

### ❌ Problem: E-Mails kommen nicht an

**Checkliste:**
- ✅ Service ID korrekt eingetragen?
- ✅ Template ID korrekt eingetragen?
- ✅ Public Key korrekt eingetragen?
- ✅ Spam-Ordner geprüft?
- ✅ EmailJS Dashboard → "Logs" geprüft?

**Outlook-spezifisch:**
- ✅ Microsoft-Account hat E-Mail-Berechtigung?
- ✅ Outlook-Posteingang nicht voll?
- ✅ Keine Weiterleitungsregeln aktiv?

### ❌ Problem: "Template not found"

**Lösung:**
1. Prüfen Sie die Template ID im EmailJS Dashboard
2. Template muss **aktiv** sein (nicht Draft)
3. Kopieren Sie die ID erneut

---

## 📊 Kostenlose Limits (EmailJS Free)

- ✅ **200 E-Mails pro Monat**
- ✅ 2 E-Mail-Services
- ✅ Unbegrenzte Templates
- ✅ 70KB Attachment-Größe

**→ Für die meisten kleinen Unternehmen ausreichend!**

Bei Bedarf Upgrade auf:
- **Personal Plan**: 1.000 E-Mails/Monat ($15)
- **Professional**: 10.000 E-Mails/Monat ($50)

---

## 🔒 Sicherheit & Datenschutz

### **Microsoft OAuth2:**
✅ EmailJS verwendet OAuth2 für sichere Verbindung  
✅ Ihr Passwort wird **niemals** gespeichert  
✅ Sie können den Zugriff jederzeit widerrufen  

### **Wo Zugriff widerrufen?**
1. Microsoft-Account → **Sicherheit**
2. **Apps & Dienste** → **Verbundene Apps**
3. **EmailJS** → **Zugriff entfernen**

---

## 📞 Support

### EmailJS Support:
- 📖 Dokumentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- 💬 Support: [https://www.emailjs.com/contact/](https://www.emailjs.com/contact/)

### Microsoft Outlook:
- 🔧 Microsoft Support: [https://support.microsoft.com/outlook](https://support.microsoft.com/outlook)

---

## ✅ Deployment-Checklist

Vor dem finalen Deployment:

- [ ] EmailJS Account erstellt
- [ ] Microsoft Outlook verbunden
- [ ] E-Mail-Template erstellt und getestet
- [ ] Service ID, Template ID & Public Key eingetragen
- [ ] Lokaler Test erfolgreich
- [ ] E-Mail in Outlook erhalten
- [ ] Netlify Forms als Fallback aktiviert

---

**🎉 Fertig! Ihr Kontaktformular ist jetzt voll funktionsfähig!**

Bei Fragen: **info@flowedge.de**

---

**Stand:** Januar 2025  
**FlowEdge Solutions** | Königsallee 63, 40215 Düsseldorf
