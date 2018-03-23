import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../../core/model';
import { CompromissoService } from '../compromisso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.title.setTitle('Compromissos Desenvolvedor');

    this.listarCompromissosPorUsuarioId(id);
  }


  listarCompromissosPorUsuarioId(id: number) {
    this.compromissoService.listarCompromissosPorUsuarioId(id)
      .then(resultado => {
        this.compromissos = resultado;
      });
  }

}
