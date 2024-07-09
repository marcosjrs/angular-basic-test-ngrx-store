import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { initialState } from '../models/card.model';
import { CardsService } from '../services/cards.service';


export const CardsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, cardsSvc = inject(CardsService)) => ({
    // 👇 Defining a method to load all cards.
    async loadPage(page:number): Promise<void> {
      patchState(store, { state: 'Loading' });
      cardsSvc.loadCards(page)
                .subscribe({
                    next: (resp) => patchState(store, 
                        { state: 'Loaded', cards: resp.data, filter: { page, query:`?num=5&offset=${page}`}, totalPages: resp.meta.total_pages 
                    }),
                    error: (err) => patchState(store, { state: 'Error', cards: []})
                });      
    },
  }))
);
