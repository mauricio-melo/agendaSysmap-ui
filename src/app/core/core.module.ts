import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

import { PerfilLiderComponent } from './perfil-lider/perfil-lider.component';
import { PerfilDesenvolvedorComponent } from './perfil-desenvolvedor/perfil-desenvolvedor.component';

@NgModule({
  imports: [
    CommonModule,
    RadioButtonModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  declarations: [PerfilComponent, PerfilLiderComponent, PerfilDesenvolvedorComponent],
  exports: [
    PerfilComponent,
    PerfilDesenvolvedorComponent,
    PerfilLiderComponent
  ]
})
export class CoreModule { }
