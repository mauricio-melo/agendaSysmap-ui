import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../../core/model';

@Component({
  selector: 'app-perfil-lider',
  templateUrl: './perfil-lider.component.html',
  styleUrls: ['./perfil-lider.component.css'],
  providers: [UsuarioService]
})
export class PerfilLiderComponent implements OnInit  {

  lideres = [];
  usuario = new Usuario;

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    this.carregarDesenvolvedores();
  }

  carregarDesenvolvedores() {
    this.usuarioService.listarTodosLideres()
      .then(resultado => {
        this.lideres = resultado;
      });
  }

}
