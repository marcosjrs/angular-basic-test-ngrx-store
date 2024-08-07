import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { Card } from '../../models/card.model';
import { HoverCardDirective } from '../../directives/hover-card.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports:[ HoverCardDirective ],
  template: `
    <div class="card" hoverCard>
      <div class="title">{{ card().name }}</div>
      <div class="description">{{ card().desc }}</div>
    </div>
 `,
  styles: `
    .card {
      outline: 1px solid #ccc;
      padding: 1.5rem;
      margin-bottom: 1rem;
      display:block;
      cursor: pointer;

      .title{
        margin-bottom: 1rem;
      }        
      .description{
        font-style: italic;
      }
    }

  `,
//   host: {
//     class: 'card'
//   },
//  hostDirectives:[ HoverCardDirective ],
 // encapsulation: ViewEncapsulation.None, /** for override by hoverCardDirective */
})
export class CardComponent {
  card = input.required<Card>();
}
