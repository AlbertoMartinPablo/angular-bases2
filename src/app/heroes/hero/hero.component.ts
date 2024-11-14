import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return this.name + "-" + this.age
  }

  changeHero(): void {
    this.name = "spiderman";
  }

  changeAge(): void {
    this.age = 23;
  }

  reset(): void {
    this.name = "ironman";
    this.age = 45;
  }

}
