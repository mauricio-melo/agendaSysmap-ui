import { Component, OnInit } from '@angular/core';
import { Compromisso } from '../../core/model';
import { CompromissoService } from '../compromisso.service';
import { UsuarioService } from '../../perfil/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-compromisso-cadastro-dev',
  templateUrl: './compromisso-cadastro-dev.component.html',
  styleUrls: ['./compromisso-cadastro-dev.component.css'],
  providers: [CompromissoService]
})
export class CompromissoCadastroDevComponent implements OnInit {

  desenvolvedores = [];
  compromisso = new Compromisso();

  constructor(
    private compromissoService: CompromissoService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.title.setTitle('Novo Compromisso');

    this.carregarDesenvolvedores();
  }

  get editando() {
    return Boolean(this.compromisso.id);
  }

  carregarDesenvolvedores() {

  }

  salvarOuEditar(form: FormControl) {
    if (this.editando) {
      this.editar(form);
    } else {
      this.salvar(form);
    }
  }

  salvar(form: FormControl) {
    this.compromissoService.salvar(this.compromisso)
      .then(compromissoAdicionado => {
        this.router.navigate(['/lancamentos', compromissoAdicionado.id]);
      });
  }

  editar(form: FormControl) {
    this.compromissoService.atualizar(this.compromisso)
      .then(resultado => {
        this.compromisso = resultado;
      });
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.compromisso = new Compromisso();
    }.bind(this), 1);

    this.router.navigate(['/desenvolvedor/compromissos/usuario/novoCompromisso']);
  }

}
