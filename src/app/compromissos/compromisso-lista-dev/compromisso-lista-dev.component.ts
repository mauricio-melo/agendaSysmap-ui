import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../../core/model';
import { CompromissoService } from '../compromisso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-compromisso-lista-dev',
  templateUrl: './compromisso-lista-dev.component.html',
  styleUrls: ['./compromisso-lista-dev.component.css'],
  providers: [CompromissoService]
})
export class CompromissoListaDevComponent implements OnInit {

  compromissos = [];
  compromisso = new Compromisso;
  id: number;

  constructor(
    private compromissoService: CompromissoService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.id = id;

    this.title.setTitle('Compromissos Desenvolvedor');

    this.listarCompromissosPorUsuarioId(id);
  }


  listarCompromissosPorUsuarioId(id: number) {
    this.compromissoService.listarCompromissosPorUsuarioId(id)
      .then(resultado => {
        this.compromissos = resultado;
      });
  }

  novo() {
    this.router.navigate(['/desenvolvedor/compromissos/usuario/dev/novoCompromisso/', this.id]);
  }

  excluir(compromisso: any) {
    this.compromissoService.excluir(compromisso.id)
      .then(() => {
        window.location.reload();
      });
  }

}

