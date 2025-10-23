import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../blog/blog.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  blogPosts: { [key: string]: BlogPost } = {
    'ki-strategie-roadmap': {
      id: 'ki-strategie-roadmap',
      title: 'KI-Strategie: Von der Vision zur Roadmap',
      subtitle: 'Wie Sie eine nachhaltige KI-Strategie entwickeln',
      excerpt: 'Eine klare KI-Strategie ist der Schlüssel zum Erfolg. Erfahren Sie, wie Sie von der Vision zur konkreten Umsetzung gelangen – praxisnah, wirtschaftlich und messbar.',
      content: `
        <h2>Warum eine KI-Strategie unverzichtbar ist</h2>
        <p>Viele Unternehmen starten KI-Projekte ohne übergeordnete Strategie. Das Ergebnis: isolierte Lösungen, die nicht skalieren, hohe Kosten ohne messbaren ROI und Frustration bei Teams und Führungskräften.</p>
        
        <p>Eine durchdachte KI-Strategie schafft Klarheit über Ziele, Prioritäten und Ressourcen. Sie verbindet Technologie mit Geschäftszielen und sorgt dafür, dass KI-Initiativen nachhaltig Mehrwert schaffen.</p>

        <h2>Die 5 Säulen einer erfolgreichen KI-Strategie</h2>
        
        <h3>1. Vision & Zieldefinition</h3>
        <p>Beginnen Sie mit der Frage: <strong>Was wollen wir mit KI erreichen?</strong></p>
        <ul>
          <li>Effizienzsteigerung in bestehenden Prozessen</li>
          <li>Neue Geschäftsmodelle und Revenue-Streams</li>
          <li>Verbesserung der Customer Experience</li>
          <li>Wettbewerbsvorteile durch datenbasierte Entscheidungen</li>
        </ul>

        <h3>2. Potenzialanalyse</h3>
        <p>Identifizieren Sie konkrete Use Cases mit hohem Impact:</p>
        <ul>
          <li>Automatisierung repetitiver Aufgaben</li>
          <li>Intelligente Dokumentenverarbeitung</li>
          <li>Predictive Analytics für bessere Forecasts</li>
          <li>KI-gestützte Kundeninteraktionen</li>
        </ul>

        <h3>3. Technologie-Roadmap</h3>
        <p>Definieren Sie, welche Technologien Sie einsetzen werden:</p>
        <ul>
          <li>Cloud-basierte KI-Services (Azure OpenAI, AWS Bedrock)</li>
          <li>On-Premise-Lösungen (Ollama, Private LLMs)</li>
          <li>No-Code/Low-Code-Plattformen (Power Automate, Make)</li>
          <li>Custom-Entwicklungen für spezifische Anforderungen</li>
        </ul>

        <h3>4. Governance & Compliance</h3>
        <p>Sichern Sie DSGVO-Konformität und ethische Standards:</p>
        <ul>
          <li>Datenschutz by Design</li>
          <li>Transparente KI-Entscheidungen</li>
          <li>Risikomanagement und Bias-Vermeidung</li>
          <li>Klare Verantwortlichkeiten</li>
        </ul>

        <h3>5. Change Management</h3>
        <p>Technologie ist nur so gut wie die Menschen, die sie nutzen:</p>
        <ul>
          <li>Frühzeitige Einbindung von Teams</li>
          <li>Schulungen und Workshops</li>
          <li>Quick Wins für Akzeptanz</li>
          <li>Kontinuierliches Feedback</li>
        </ul>

        <h2>Von der Strategie zur Umsetzung</h2>
        <p>Eine Strategie ist nur wertvoll, wenn sie umgesetzt wird. Unser Ansatz:</p>
        
        <ol>
          <li><strong>Strategieworkshop</strong>: Gemeinsame Definition von Vision, Zielen und Prioritäten</li>
          <li><strong>Proof of Concept</strong>: Schnelle Validierung mit einem ersten Use Case</li>
          <li><strong>Pilotphase</strong>: Rollout in einem definierten Bereich</li>
          <li><strong>Skalierung</strong>: Ausweitung auf weitere Prozesse und Teams</li>
          <li><strong>Continuous Improvement</strong>: Regelmäßige Evaluierung und Optimierung</li>
        </ol>

        <h2>Fazit</h2>
        <p>Eine klare KI-Strategie ist kein theoretisches Konzept, sondern ein praxisnaher Fahrplan, der Technologie, Menschen und Prozesse verbindet. Sie sorgt dafür, dass KI-Investitionen messbare Ergebnisse liefern und Ihr Unternehmen nachhaltig voranbringen.</p>

        <p><strong>Bereit für Ihre KI-Strategie?</strong> Lassen Sie uns gemeinsam Ihre Roadmap entwickeln.</p>
      `,
      author: 'FlowEdge AI Team',
      date: '2025-01-15',
      readTime: '8 Min.',
      category: 'Strategie',
      image: '/blog/strategy.jpg',
      tags: ['KI-Strategie', 'Digitalisierung', 'Transformation']
    },
    'automatisierung-effizienz': {
      id: 'automatisierung-effizienz',
      title: 'Automatisierung: Effizienz durch intelligente Prozesse',
      subtitle: 'Wie Automatisierung Ihr Unternehmen transformiert',
      excerpt: 'Von manuellen Prozessen zu automatisierten Workflows: Entdecken Sie, wie moderne Automatisierungslösungen Zeit sparen, Fehler reduzieren und Ihre Teams entlasten.',
      content: `
        <h2>Die Automatisierungslücke</h2>
        <p>Viele Unternehmen verlieren täglich wertvolle Zeit durch manuelle, repetitive Aufgaben:</p>
        <ul>
          <li>E-Mails sortieren und weiterleiten</li>
          <li>Daten zwischen Systemen übertragen</li>
          <li>Dokumente erstellen und versenden</li>
          <li>Berichte manuell zusammenstellen</li>
        </ul>
        
        <p>Diese Tätigkeiten kosten nicht nur Zeit, sondern sind auch fehleranfällig und demotivierend für Mitarbeitende. Moderne Automatisierung schafft hier Abhilfe.</p>

        <h2>Was kann automatisiert werden?</h2>
        
        <h3>1. Dokumentenverarbeitung</h3>
        <ul>
          <li>Automatische Extraktion von Daten aus PDFs und Rechnungen</li>
          <li>Intelligente Klassifizierung und Archivierung</li>
          <li>Vertragsanalysen und NDA-Prüfungen</li>
        </ul>

        <h3>2. E-Mail-Management</h3>
        <ul>
          <li>Automatische Kategorisierung und Priorisierung</li>
          <li>KI-gestützte Entwürfe für Standardantworten</li>
          <li>Automatische Weiterleitung an zuständige Teams</li>
        </ul>

        <h3>3. Workflow-Automation</h3>
        <ul>
          <li>Verbindung von Systemen über APIs</li>
          <li>Automatische Benachrichtigungen und Eskalationen</li>
          <li>Datenabgleich zwischen CRM, ERP und anderen Tools</li>
        </ul>

        <h3>4. Reporting & Analytics</h3>
        <ul>
          <li>Automatische Dashboards und Reports</li>
          <li>Predictive Analytics für bessere Forecasts</li>
          <li>Echtzeit-Monitoring von KPIs</li>
        </ul>

        <h2>Unsere Automatisierungslösungen</h2>
        
        <h3>Microsoft Power Automate</h3>
        <p>Ideal für Teams, die bereits im Microsoft-Ökosystem arbeiten. Verbinden Sie Outlook, Teams, SharePoint und 300+ weitere Apps – ohne eine Zeile Code.</p>

        <h3>Make (ehemals Integromat)</h3>
        <p>Flexibel und visuell: Erstellen Sie komplexe Workflows per Drag-and-Drop. Perfekt für API-Integrationen und individuelle Prozesse.</p>

        <h3>Custom Solutions</h3>
        <p>Für spezifische Anforderungen entwickeln wir maßgeschneiderte Automatisierungen – skalierbar, sicher und DSGVO-konform.</p>

        <h2>ROI: Zeitersparnis, die sich rechnet</h2>
        <p>Typische Ergebnisse unserer Automatisierungsprojekte:</p>
        <ul>
          <li><strong>75% Zeitersparnis</strong> bei E-Mail-Bearbeitung</li>
          <li><strong>90% weniger Fehler</strong> bei Dateneingaben</li>
          <li><strong>50% schnellere</strong> Dokumentenverarbeitung</li>
          <li><strong>3-6 Monate</strong> bis zur vollständigen Amortisation</li>
        </ul>

        <h2>Best Practices für erfolgreiche Automatisierung</h2>
        <ol>
          <li><strong>Klein starten</strong>: Beginnen Sie mit einem klar abgegrenzten Prozess</li>
          <li><strong>Quick Wins identifizieren</strong>: Wählen Sie Aufgaben mit hohem Aufwand und geringer Komplexität</li>
          <li><strong>Teams einbinden</strong>: Die Nutzer kennen die Schmerzpunkte am besten</li>
          <li><strong>Messbar machen</strong>: Definieren Sie KPIs und tracken Sie Erfolge</li>
          <li><strong>Iterativ optimieren</strong>: Automatisierung ist kein einmaliges Projekt</li>
        </ol>

        <h2>Fazit</h2>
        <p>Automatisierung ist kein Luxus mehr, sondern eine Notwendigkeit. Unternehmen, die manuelle Prozesse durch intelligente Workflows ersetzen, gewinnen Zeit, reduzieren Kosten und schaffen Raum für wertschöpfende Tätigkeiten.</p>

        <p><strong>Bereit, Ihre Prozesse zu optimieren?</strong> Lassen Sie uns gemeinsam Ihre Automatisierungspotenziale identifizieren.</p>
      `,
      author: 'FlowEdge AI Team',
      date: '2025-01-10',
      readTime: '6 Min.',
      category: 'Automatisierung',
      image: '/blog/automation.jpg',
      tags: ['Automatisierung', 'Effizienz', 'Prozessoptimierung']
    },
    'ki-integration-praxis': {
      id: 'ki-integration-praxis',
      title: 'KI-Integration in der Praxis',
      subtitle: 'Von der Theorie zur produktiven Nutzung',
      excerpt: 'KI-Projekte scheitern oft an der Umsetzung. Wir zeigen, wie Sie KI erfolgreich in Ihre bestehende IT-Landschaft integrieren – DSGVO-konform und skalierbar.',
      content: `
        <h2>Die Herausforderung: Von der Demo zur Produktion</h2>
        <p>Viele KI-Projekte bleiben in der Proof-of-Concept-Phase stecken. Die Gründe:</p>
        <ul>
          <li>Fehlende Integration in bestehende Systeme</li>
          <li>Unklare Datenschutz- und Compliance-Anforderungen</li>
          <li>Mangelnde Skalierbarkeit</li>
          <li>Hohe Betriebskosten</li>
        </ul>

        <p>Erfolgreiche KI-Integration erfordert mehr als technisches Know-how – sie braucht eine durchdachte Architektur, die Sicherheit, Performance und Wirtschaftlichkeit vereint.</p>

        <h2>Unsere Integrationsprinzipien</h2>

        <h3>1. DSGVO-konforme Architekturen</h3>
        <p>Datenschutz ist kein Hindernis, sondern ein Qualitätsmerkmal:</p>
        <ul>
          <li><strong>Data Residency</strong>: Daten bleiben in der EU (Azure EU-Regionen)</li>
          <li><strong>On-Premise-Optionen</strong>: Ollama für vollständige Datenkontrolle</li>
          <li><strong>Datenminimierung</strong>: Nur notwendige Daten werden verarbeitet</li>
          <li><strong>Transparenz</strong>: Nachvollziehbare KI-Entscheidungen</li>
        </ul>

        <h3>2. Hybrid Cloud Approach</h3>
        <p>Das Beste aus beiden Welten:</p>
        <ul>
          <li><strong>Cloud</strong>: Azure OpenAI für skalierbare, leistungsstarke Modelle</li>
          <li><strong>On-Premise</strong>: Ollama für sensible Daten und Offline-Betrieb</li>
          <li><strong>Edge Computing</strong>: Lokal verarbeitete Daten für niedrige Latenz</li>
        </ul>

        <h3>3. API-First Design</h3>
        <p>Integration statt Insellösungen:</p>
        <ul>
          <li>RESTful APIs für einfache Anbindung</li>
          <li>Webhooks für Event-basierte Workflows</li>
          <li>Standardisierte Schnittstellen zu ERP, CRM, DMS</li>
        </ul>

        <h2>Praxisbeispiele unserer KI-Integrationen</h2>

        <h3>MailAider AI: E-Mail-Automatisierung</h3>
        <p>Unser KI-gestütztes E-Mail-Tool nutzt Azure OpenAI, um:</p>
        <ul>
          <li>E-Mails automatisch zu kategorisieren</li>
          <li>Kontext-basierte Antworten vorzuschlagen</li>
          <li>Wichtige Informationen zu extrahieren</li>
        </ul>
        <p><strong>Integration</strong>: Nahtlos in Microsoft Outlook über Add-In</p>

        <h3>Dokumentenanalyse für Rechtsabteilungen</h3>
        <ul>
          <li>Automatische NDA-Prüfungen</li>
          <li>Extraktion von Vertragsklauseln</li>
          <li>Risikoanalysen und Compliance-Checks</li>
        </ul>
        <p><strong>Integration</strong>: Anbindung an SharePoint und Azure Blob Storage</p>

        <h3>Chatbot auf internen Wissensdatenbanken</h3>
        <ul>
          <li>RAG (Retrieval Augmented Generation) auf Unternehmensdaten</li>
          <li>Semantic Search in Dokumenten</li>
          <li>Rollenbasierter Zugriff</li>
        </ul>
        <p><strong>Integration</strong>: Teams-Integration, Web-Frontend, API</p>

        <h2>Technologie-Stack</h2>

        <h3>Cloud-basiert</h3>
        <ul>
          <li><strong>Azure OpenAI</strong>: GPT-4, GPT-3.5, Embeddings</li>
          <li><strong>Azure Cognitive Services</strong>: OCR, Speech, Vision</li>
          <li><strong>Power Platform</strong>: Power Automate, Power Apps</li>
        </ul>

        <h3>On-Premise</h3>
        <ul>
          <li><strong>Ollama</strong>: Llama 2, Mistral, Custom Models</li>
          <li><strong>Docker/Kubernetes</strong>: Container-basierte Deployments</li>
          <li><strong>PostgreSQL + pgvector</strong>: Vector Database für Embeddings</li>
        </ul>

        <h3>Integration Layer</h3>
        <ul>
          <li><strong>FastAPI/Node.js</strong>: Backend-Services</li>
          <li><strong>React/Angular</strong>: Web-Frontends</li>
          <li><strong>Azure Functions</strong>: Serverless Computing</li>
        </ul>

        <h2>Der Weg zur produktiven KI</h2>

        <h3>Phase 1: Discovery (1-2 Wochen)</h3>
        <ul>
          <li>Analyse bestehender Systeme und Schnittstellen</li>
          <li>Definition von Use Cases und Anforderungen</li>
          <li>Architektur-Design und Technologie-Auswahl</li>
        </ul>

        <h3>Phase 2: Proof of Concept (2-4 Wochen)</h3>
        <ul>
          <li>Entwicklung eines Prototyps</li>
          <li>Integration in Testsysteme</li>
          <li>Erste Evaluierung mit realen Daten</li>
        </ul>

        <h3>Phase 3: Pilotphase (4-8 Wochen)</h3>
        <ul>
          <li>Rollout in definiertem Bereich</li>
          <li>User Acceptance Testing</li>
          <li>Optimierung basierend auf Feedback</li>
        </ul>

        <h3>Phase 4: Produktivbetrieb</h3>
        <ul>
          <li>Full Rollout</li>
          <li>Monitoring und Support</li>
          <li>Continuous Improvement</li>
        </ul>

        <h2>Fazit</h2>
        <p>KI-Integration ist kein technisches Problem, sondern eine strategische Aufgabe. Mit der richtigen Architektur, klaren Compliance-Vorgaben und einem iterativen Ansatz gelingt der Schritt von der Demo zur produktiven Nutzung.</p>

        <p><strong>Bereit für den nächsten Schritt?</strong> Lassen Sie uns Ihre KI-Integration gemeinsam planen und umsetzen.</p>
      `,
      author: 'FlowEdge AI Team',
      date: '2025-01-05',
      readTime: '10 Min.',
      category: 'KI-Entwicklung',
      image: '/blog/ai-integration.jpg',
      tags: ['KI-Integration', 'DSGVO', 'Best Practices']
    }
  };

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId && this.blogPosts[postId]) {
      this.post = this.blogPosts[postId];
    } else {
      this.router.navigate(['/blog']);
    }
  }

  goBack() {
    this.router.navigate(['/blog']);
  }

  scrollToContact() {
    this.router.navigate(['/kontakt']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
