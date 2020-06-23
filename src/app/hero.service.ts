import { Injectable } from '@angular/core';
import { Hero } from './datamodel/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    let out; out = this.http.get<Hero[]>(this.heroesUrl);
    this.log('HeroService: fetched heroes');
    return out;
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHero(id: number) {
    this.log(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
