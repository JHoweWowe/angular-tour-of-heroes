import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  /** 'hero' is a propery and 'Hero' is an interface to be initalized (an object)
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }; **/

  heroes = Heroes;
  selectedHero?: Hero; // Conditional (ternary) operator where syntax is 'condition ? exprIfTrue : exprIfFalse'

  constructor() {}

  // In TypeScript colon after method type indicates function or variable
  ngOnInit(): void {
  }

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }



}
