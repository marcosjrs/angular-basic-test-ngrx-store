import { Component, effect, inject } from '@angular/core';
import { CardsStore } from '../../store/cards.store';
import { JsonPipe } from '@angular/common';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ JsonPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
  providers: [CardsStore],
})
export class CardsComponent {
  readonly store = inject(CardsStore);

  constructor() {
    effect(() => {
      // 👇 The effect will be re-executed whenever the state changes.
      const state = getState(this.store);
      console.log('cards state changed', state);
    });
    this.store.loadPage(1);
  }
}
