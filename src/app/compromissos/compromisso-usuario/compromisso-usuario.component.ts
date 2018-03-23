import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../../core/model';
import { CompromissoService } from '../compromisso.service';

@Component({
  selector: 'app-compromisso-usuario',
  templateUrl: './compromisso-usuario.component.html',
  styleUrls: ['./compromisso-usuario.component.css'],
  providers: [CompromissoService]
})
export class CompromissoUsuarioComponent implements OnInit {

  compromissos = [];
  compromisso = new Compromisso;

  constructor(
    private compromissoService: CompromissoService,
  ) { }

  ngOnInit() {
    this.listarCompromissosPorUsuario();
  }

  listarCompromissosPorUsuario() {
    this.compromissoService.listarCompromissosPorUsuario()
      .then(resultado => {
        this.compromissos = resultado;
      });
  }
}
