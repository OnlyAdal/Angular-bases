import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola mund';
  public counter:number= 10;

 public increaseBy(value:number):void{

    this.counter+= value;

  }

  reset():void{
    this.counter= 10;
  }


}
