import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChangeService {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-change',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent {
  services: ChangeService[] = [
    { icon: '📚', title: 'Schulungen und Workshops' },
    { icon: '👥', title: 'Rollen und Prozesse definieren' },
    { icon: '🔐', title: 'DSGVO-Beratung (TOMs, DPIA, Logging)' },
    { icon: '🚀', title: 'Change und Akzeptanzförderung' }
  ];
}
