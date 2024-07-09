import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { initialState } from '../models/card.model';
import { CardsService } from '../services/cards.service';


export const CardsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, cardsSvc = inject(CardsService)) => ({
    // 👇 Defining a method to load all cards.
    async loadAll(): Promise<void> {
      patchState(store, { state: 'Loading' });
      cardsSvc.loadCards()
                .subscribe({
                    next: (resp) => patchState(store, { state: 'Loaded', cards: resp.data}),
                    error: (err) => patchState(store, { state: 'Error', cards: []})
                });      
    },
  }))
);
