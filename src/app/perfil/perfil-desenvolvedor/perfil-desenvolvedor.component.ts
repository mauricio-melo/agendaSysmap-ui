import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

import { FormControl } from '@angular/forms';
import { Usuario } from '../../core/model';

@Component({
  selector: 'app-perfil-desenvolvedor',
  templateUrl: './perfil-desenvolvedor.component.html',
  styleUrls: ['./perfil-desenvolvedor.component.css'],
  providers: [UsuarioService]
})
export class PerfilDesenvolvedorComponent implements OnInit  {

  desenvolvedores = [];
  usuario = new Usuario;

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.carregarDesenvolvedores();
  }

  carregarDesenvolvedores() {
    return this.usuarioService.listarTodosDesenvolvedores()
      .then(resultado => {
        this.desenvolvedores = resultado
          .map(d => ({ label: d.nome, value: d.id }));
      });
  }

}

