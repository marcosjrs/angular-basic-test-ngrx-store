import { Component, input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
        <div class="title">{{ card().name }}</div>
        <div class="description">{{ card().desc }}</div>
    </div>
  `,
  styles: `
    .card {
      outline: 1px solid #ccc;
      padding: 1.5rem;
      margin-bottom: 1rem;
      .title{
          margin-bottom: 1rem;
      }        
      .description{
          font-style: italic;
      }
    }
  `
})
export class CardComponent {
  card = input.required<Card>();
}
