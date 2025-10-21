import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mission-teaser',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mission-teaser.component.html',
  styleUrls: ['./mission-teaser.component.scss']
})
export class MissionTeaserComponent {}
