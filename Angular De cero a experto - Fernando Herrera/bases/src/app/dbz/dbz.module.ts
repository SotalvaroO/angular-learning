//Primero imports de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Luego imports de terceros

//Por ultimo imports propios
import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterFormComponent } from './character-form/character-form.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    CharacterFormComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  providers: [DbzService],
})
export class DbzModule {}
