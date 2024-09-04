import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public heroNames:string[]=['Spiderman', 'Thor', 'Hulk', 'She-Hulk','IronMan'];

  public deletedHero?:string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();

  }

}
