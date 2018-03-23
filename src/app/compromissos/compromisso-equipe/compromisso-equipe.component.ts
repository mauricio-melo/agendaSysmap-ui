import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../../core/model';
import { CompromissoService } from '../compromisso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.title.setTitle('Compromissos Equipe');

    this.listarCompromissosPorEquipeId(id);
  }


  listarCompromissosPorEquipeId(id: number) {
    this.compromissoService.listarCompromissosPorEquipeId(id)
      .then(resultado => {
        this.compromissos = resultado;
      });
  }

}
