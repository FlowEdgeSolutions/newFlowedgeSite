import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Lightweight, static demo of the VoiceAider AI console inspired by the provided screenshots.
// Tabs are client-side only and switch views with simple state.

interface UseCaseCard {
  category: string;
  title: string;
  tags: string[];
  description: string;
}

interface FlowNode {
  icon: string;
  title: string;
  snippet: string;
}

@Component({
  selector: 'app-voiceaider-ai-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voiceaider-ai-demo.html',
  styleUrl: './voiceaider-ai-demo.scss'
})
export class VoiceaiderAiDemoComponent {
  tabs = ['Use Case', 'Flow Designer', 'Knowledge Base', 'Actions', 'Test Calls'] as const;
  activeTab: typeof this.tabs[number] = 'Use Case';

  setTab(tab: typeof this.tabs[number]) {
    this.activeTab = tab;
  }

  useCases: UseCaseCard[] = [
    {
      category: 'Real Estate',
      title: 'Lead Qualification · Buyer',
      tags: ['#Real-Time Booking', '#Lead Qualification'],
      description:
        'Meet Paul, an AI assistant designed for real estate lead qualification. Paul’s primary objective is to identify the preference…'
    },
    {
      category: 'E-Commerce',
      title: 'Customer Support · Restaurant',
      tags: ['#Real-Time Booking', '#Receptionist'],
      description:
        'Meet Laura, an AI assistant for Gourmet Table, a fine dining restaurant. Her primary role is to assist callers in scheduling…'
    },
    {
      category: 'Healthcare',
      title: 'Healthcare Receptionist',
      tags: ['#Receptionist', '#Real-Time Booking'],
      description:
        'Meet Jessica, an AI assistant for your Healthcare company, dedicated to streamlining appointment scheduling and improving…'
    }
  ];

  flowNodes: FlowNode[] = [
    {
      icon: 'settings',
      title: 'Global Settings',
      snippet:
        'Who You Are You are Jessica, a friendly and thoughtful AI voice assistant for Harmony..'
    },
    {
      icon: 'call',
      title: 'Greeting Message',
      snippet:
        "Hey there, this is Jessica from Harmony Wellness Group, just letting you know this call…"
    },
    {
      icon: 'notes',
      title: 'Custom Greeting',
      snippet:
        'After the Custom Greeting ["Hey there, this is Jessica from Harmony Wellness Group–just…]'
    },
    {
      icon: 'rule',
      title: "Determine the Caller's Need",
      snippet:
        'Ask: "Are you looking to schedule, reschedule, cancel an appointment, or just have a quick…"'
    }
  ];

  kbText = `HEALTHCARE_RECEPTIONIST_FAQ.PDF\n\n“Do I need a referral?” → No referral needed for internal specialists\n\n“Do you offer same-day appointments?” → Sometimes, depending on provider\n\n“When should I arrive?” → Please come 10–15 minutes early`;
}
