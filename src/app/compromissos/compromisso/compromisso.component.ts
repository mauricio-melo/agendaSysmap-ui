import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compromisso',
  templateUrl: './compromisso.component.html',
  styleUrls: ['./compromisso.component.css']
})
export class CompromissoComponent {

  compromissos = [
    {id: '1', idUsuario: '1', descricao: 'Reunião para alinhar o aporte financeiro do Itaú',
      inicio: '2016-10-24 09:34:49', termino: '2016-10-24 09:34:49', local: 'Sysmap'},
    {id: '2', idUsuario: '1', descricao: 'Reunião para alinhar o aporte financeiro do Itaú',
      inicio: '2016-10-24 09:34:49', termino: '2016-10-24 09:34:49', local: 'Sysmap'},
    {id: '3', idUsuario: '1', descricao: 'Reunião para alinhar o aporte financeiro do Itaú',
      inicio: '2016-10-24 09:34:49', termino: '2016-10-24 09:34:49', local: 'Sysmap'},
    {id: '4', idUsuario: '1', descricao: 'Reunião para alinhar o aporte financeiro do Itaú',
      inicio: '2016-10-24 09:34:49', termino: '2016-10-24 09:34:49', local: 'Sysmap'},
    {id: '5', idUsuario: '1', descricao: 'Reunião para alinhar o aporte financeiro do Itaú',
      inicio: '2016-10-24 09:34:49', termino: '2016-10-24 09:34:49', local: 'Sysmap'}
  ];

}
