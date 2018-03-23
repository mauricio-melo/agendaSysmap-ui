import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-perfil-desenvolvedor',
  templateUrl: './perfil-desenvolvedor.component.html',
  styleUrls: ['./perfil-desenvolvedor.component.css'],
  providers: [UsuarioService]
})
export class PerfilDesenvolvedorComponent implements OnInit  {
  /*desenvolvedores = [
    {name: 'Mauricio'},
    {name: 'Agnaldo'},
    {name: 'Lucas'},
    {name: 'Thiago'},
  ];/*/

  desenvolvedores = [];
  usuario = new Usuario();

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.carregarDesenvolvedores();
  }

  carregarDesenvolvedores() {
    return this.usuarioService.listarTodosDesenvolvedores()
      .then(desenvolvedores => {
        this.desenvolvedores = desenvolvedores
          .map(d => ({ label: d.nome, value: d.id }));
      });
  }
}

