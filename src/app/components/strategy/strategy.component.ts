import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServicePoint {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-strategy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {
  services: ServicePoint[] = [
    {
      icon: '🤖',
      title: 'Automation Machine Learning',
      description: 'Streamline processes with intelligent automation'
    },
    {
      icon: '🧠',
      title: 'AI-Powered Chatbots',
      description: 'Enhance customer engagement 24/7'
    },
    {
      icon: '📊',
      title: 'Data Analytics Deep Insights',
      description: 'Transform data into actionable strategies'
    },
    {
      icon: '🎯',
      title: 'AI Strategy Pro Consulting',
      description: 'Expert guidance for AI implementation'
    }
  ];
}
