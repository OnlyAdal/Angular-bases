import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron Man';
  public age:  number = 45

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void {

    this.name='Batman'

  }

  changeAge(): void {
this.age=55
  }

  resetForm():void {
    this.name='iron man';
    this.age=45;
  }

}
