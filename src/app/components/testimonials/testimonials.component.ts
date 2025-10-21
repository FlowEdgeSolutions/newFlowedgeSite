import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: 'FlowEdge AI hat uns geholfen, KI strategisch in unsere Prozesse zu integrieren. Die Beratung war praxisnah und die Umsetzung schnell und professionell.',
      author: 'Dr. Michael Schneider',
      position: 'Geschäftsführer',
      company: 'TechVision GmbH',
      rating: 5
    },
    {
      quote: 'Endlich ein Partner, der nicht nur über KI spricht, sondern echte Lösungen liefert. Die entwickelte Automatisierung spart uns täglich mehrere Stunden.',
      author: 'Sarah Weber',
      position: 'Head of Operations',
      company: 'Digital Solutions AG',
      rating: 5
    },
    {
      quote: 'Besonders beeindruckend war das Change Management. FlowEdge AI hat unser Team optimal auf die neuen KI-Tools vorbereitet – die Akzeptanz ist enorm hoch.',
      author: 'Thomas Müller',
      position: 'IT-Leiter',
      company: 'Innovation Labs',
      rating: 5
    }
  ];
}
