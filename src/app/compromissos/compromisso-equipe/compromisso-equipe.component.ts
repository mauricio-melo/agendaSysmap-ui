import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../../core/model';
import { CompromissoService } from '../compromisso.service';

@Component({
  selector: 'app-compromisso-equipe',
  templateUrl: './compromisso-equipe.component.html',
  styleUrls: ['./compromisso-equipe.component.css'],
  providers: [CompromissoService]
})
export class CompromissoEquipeComponent implements OnInit {

  compromissos = [];
  compromisso = new Compromisso;

  constructor(
    private compromissoService: CompromissoService,
  ) { }

  ngOnInit() {
    this.listarCompromissosPorUsuario();
  }

  listarCompromissosPorUsuario() {
    this.compromissoService.listarCompromissosPorEquipe()
      .then(resultado => {
        this.compromissos = resultado;
      });
  }

}
