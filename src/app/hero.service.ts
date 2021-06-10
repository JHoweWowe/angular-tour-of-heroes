import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { Heroes } from './mock-heroes';

import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

// HeroService class provides injectable service
@Injectable({
  providedIn: 'root' // Registers provider with root injector
})
export class HeroService {

  constructor(public messageService : MessageService) { }

  // Signature must be asynchronous -
  getHeroes() : Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}
