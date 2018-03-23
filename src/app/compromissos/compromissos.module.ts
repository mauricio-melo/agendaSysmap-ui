import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DataTableModule } from 'primeng/components/datatable/datatable';


import { CompromissoEquipeComponent } from './compromisso-equipe/compromisso-equipe.component';
import { CompromissoUsuarioComponent } from './compromisso-usuario/compromisso-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    DataTableModule
  ],
  declarations: [CompromissoEquipeComponent, CompromissoUsuarioComponent],
  exports: [
    CompromissoEquipeComponent,
    CompromissoUsuarioComponent
  ]
})
export class CompromissosModule { }
