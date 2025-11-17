import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // <-- Wichtig
import { VapiService } from '../../services/vapi.service';
import Vapi from '@vapi-ai/web';

@Component({
  selector: 'app-vapi-voice-widget',
  standalone: true,                               // <-- Standalone-Komponente
  imports: [CommonModule],                        // <-- ngIf, ngFor, ngClass
  templateUrl: './vapi-voice-widget.component.html',
  styleUrls: ['./vapi-voice-widget.component.scss'],
})
export class VapiVoiceWidgetComponent implements OnInit, OnDestroy {
  @Input() apiKey!: string;        // public API Key
  @Input() assistantId!: string;   // Assistant-ID aus Vapi

  isCalling = false;
  logs: string[] = [];

  private vapi: Vapi | null = null;

  constructor(private vapiService: VapiService) {}

  ngOnInit(): void {
    this.vapi = this.vapiService.init(this.apiKey);

    this.vapi.on('call-start', () => {
      this.isCalling = true;
      this.logs.push('⚡ Call started');
    });

    this.vapi.on('call-end', () => {
      this.isCalling = false;
      this.logs.push('🛑 Call ended');
    });

    this.vapi.on('message', (msg: any) => {
      if (msg.type === 'transcript') {
        const prefix = msg.role === 'assistant' ? '🤖' : '🧑';
        this.logs.push(`${prefix} ${msg.transcript}`);
      }
    });
  }

  toggleCall() {
    if (!this.vapi) return;

    if (this.isCalling) {
      this.vapi.stop();
    } else {
      this.vapi.start(this.assistantId);
    }
  }

  ngOnDestroy(): void {
    if (this.vapi) {
      this.vapi.removeAllListeners();
    }
  }
}
