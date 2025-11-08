import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  constructor(private router: Router) {}

  blogPosts: BlogPost[] = [
    {
      id: 'ki-strategie-roadmap',
      title: 'KI-Strategie: Von der Vision zur Roadmap',
      subtitle: 'Wie Sie eine nachhaltige KI-Strategie entwickeln',
      excerpt: 'Eine klare KI-Strategie ist der Schlüssel zum Erfolg. Erfahren Sie, wie Sie von der Vision zur konkreten Umsetzung gelangen – praxisnah, wirtschaftlich und messbar.',
      content: '',
      author: 'FlowEdge Solutions Team',
      date: '2025-01-15',
      readTime: '8 Min.',
      category: 'Strategie',
      image: '/blog/strategy.jpg',
      tags: ['KI-Strategie', 'Digitalisierung', 'Transformation']
    },
    {
      id: 'automatisierung-effizienz',
      title: 'Automatisierung: Effizienz durch intelligente Prozesse',
      subtitle: 'Wie Automatisierung Ihr Unternehmen transformiert',
      excerpt: 'Von manuellen Prozessen zu automatisierten Workflows: Entdecken Sie, wie moderne Automatisierungslösungen Zeit sparen, Fehler reduzieren und Ihre Teams entlasten.',
      content: '',
      author: 'FlowEdge Solutions Team',
      date: '2025-01-10',
      readTime: '6 Min.',
      category: 'Automatisierung',
      image: '/blog/automation.jpg',
      tags: ['Automatisierung', 'Effizienz', 'Prozessoptimierung']
    },
    {
      id: 'ki-integration-praxis',
      title: 'KI-Integration in der Praxis',
      subtitle: 'Von der Theorie zur produktiven Nutzung',
      excerpt: 'KI-Projekte scheitern oft an der Umsetzung. Wir zeigen, wie Sie KI erfolgreich in Ihre bestehende IT-Landschaft integrieren – DSGVO-konform und skalierbar.',
      content: '',
      author: 'FlowEdge Solutions Team',
      date: '2025-01-05',
      readTime: '10 Min.',
      category: 'KI-Entwicklung',
      image: '/blog/ai-integration.jpg',
      tags: ['KI-Integration', 'DSGVO', 'Best Practices']
    }
  ];

  categories = ['Alle', 'Strategie', 'Automatisierung', 'KI-Entwicklung'];
  selectedCategory = 'Alle';

  get filteredPosts(): BlogPost[] {
    if (this.selectedCategory === 'Alle') {
      return this.blogPosts;
    }
    return this.blogPosts.filter(post => post.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  readMore(postId: string) {
    this.router.navigate(['/blog', postId]);
  }
}
