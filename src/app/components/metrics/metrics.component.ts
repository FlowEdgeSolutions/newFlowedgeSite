import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Metric {
  value: string;
  label: string;
}

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent {
  metrics: Metric[] = [
    { value: '10M+', label: 'Users benefiting from our AI-powered solutions' },
    { value: '4.9/5', label: 'Average rating across all AI-driven applications' },
    { value: '80%', label: 'Faster decision-making with AI recommendations' },
    { value: '99%', label: 'Uptime guarantee for seamless AI experience' }
  ];
}
