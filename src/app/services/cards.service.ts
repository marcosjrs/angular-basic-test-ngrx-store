import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseCards, URL_BASE } from '../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  http = inject(HttpClient);

  loadCards(page = 0): Observable<ResponseCards> {
    return this.http.get<ResponseCards>(`${URL_BASE}?num=5&offset=${page}`);
  }
}
