import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompromissoComponent } from './compromisso/compromisso.component';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DataTableModule } from 'primeng/components/datatable/datatable';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    DataTableModule
  ],
  declarations: [CompromissoComponent],
  exports: [
    CompromissoComponent
  ]
})
export class CompromissosModule { }
