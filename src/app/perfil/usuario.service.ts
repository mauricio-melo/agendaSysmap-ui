import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { Usuario } from '../core/model';

@Injectable()
export class UsuarioService {

  usuariosUrl: string;

  constructor(private http: Http) {
    this.usuariosUrl = `${environment.apiUrl}/usuario/perfil`;
   }

   listarTodosDesenvolvedores(): Promise<any> {
    return this.http.get(`${this.usuariosUrl}/desenvolvedor`)
      .toPromise()
      .then(response => {
        const usuario = response.json() as Usuario;
        return usuario;
      });
  }

  listarTodosLideres(): Promise<any> {
    return this.http.get(`${this.usuariosUrl}/lider`)
      .toPromise()
      .then(response => {
        const usuario = response.json() as Usuario;
        return usuario;
      });
  }


}
