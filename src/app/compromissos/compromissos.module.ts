
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { CompromissoCadastroEquipeComponent } from './compromisso-cadastro-equipe/compromisso-cadastro-equipe.component';
import { CompromissoCadastroDevComponent } from './compromisso-cadastro-dev/compromisso-cadastro-dev.component';
import { CoreModule } from '../core/core.module';
import { CompromissoListaDevComponent } from './compromisso-lista-dev/compromisso-lista-dev.component';
import { CompromissoListaEquipeComponent } from './compromisso-lista-equipe/compromisso-lista-equipe.component';

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
    CoreModule,
    TooltipModule
  ],
  declarations: [
    CompromissoCadastroEquipeComponent,
    CompromissoCadastroDevComponent,
    CompromissoListaDevComponent,
    CompromissoListaEquipeComponent],
  exports: [
    CompromissoListaDevComponent,
    CompromissoListaEquipeComponent,
    CompromissoCadastroDevComponent,
    CompromissoCadastroEquipeComponent
  ]
})
export class CompromissosModule { }
