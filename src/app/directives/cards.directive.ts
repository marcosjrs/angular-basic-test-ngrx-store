import {
  effect,
  Directive,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Card } from '../models/card.model';

@Directive({
  selector: '[cards]',
  standalone: true,
})
export class CardsDirective {
  cards = input<Card[]>([]);
  templateRef = inject(TemplateRef<any>);
  container = inject(ViewContainerRef);

  constructor(){
    effect(() => {
      this.container.clear();
      for (let i = 0; i < this.cards().length; i++) {
        const context = { $card: this.cards()[i] };
        this.container.createEmbeddedView(this.templateRef, context);
      }
    });
  }
  
}
