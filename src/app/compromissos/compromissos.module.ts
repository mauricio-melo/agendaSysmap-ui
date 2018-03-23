
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';


import { CompromissoEquipeComponent } from './compromisso-equipe/compromisso-equipe.component';
import { CompromissoUsuarioComponent } from './compromisso-usuario/compromisso-usuario.component';
import { CompromissoCadastroEquipeComponent } from './compromisso-cadastro-equipe/compromisso-cadastro-equipe.component';
import { CompromissoCadastroDevComponent } from './compromisso-cadastro-dev/compromisso-cadastro-dev.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    DataTableModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    CoreModule
  ],
  declarations: [
    CompromissoEquipeComponent,
    CompromissoUsuarioComponent,
    CompromissoCadastroEquipeComponent,
    CompromissoCadastroDevComponent],
  exports: [
    CompromissoEquipeComponent,
    CompromissoUsuarioComponent,
    CompromissoCadastroDevComponent,
    CompromissoCadastroEquipeComponent
  ]
})
export class CompromissosModule { }
