import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-Character/add-Character.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
 imports:[CommonModule,
  FormsModule
 ],
  exports: [MainPageComponent]
})
export class DbzModule { }
