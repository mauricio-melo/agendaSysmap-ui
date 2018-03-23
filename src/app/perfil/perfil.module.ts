import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/components/datatable/datatable';

import { PerfilEscolhaComponent } from './perfil-escolha/perfil-escolha.component';
import { PerfilDesenvolvedorComponent } from './perfil-desenvolvedor/perfil-desenvolvedor.component';
import { PerfilLiderComponent } from './perfil-lider/perfil-lider.component';

import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    RadioButtonModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    DataTableModule
  ],
  declarations: [PerfilEscolhaComponent, PerfilDesenvolvedorComponent, PerfilLiderComponent],
  exports: [
    PerfilDesenvolvedorComponent,
    PerfilEscolhaComponent,
    PerfilLiderComponent
  ]
})
export class PerfilModule { }
