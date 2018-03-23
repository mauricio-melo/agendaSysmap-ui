import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';

@Injectable()
export class UsuarioService {

  usuariosUrl: string;

  constructor(private http: Http) {
    this.usuariosUrl = `${environment.apiUrl}/usuario/perfil/desenvolvedor`;
   }

   listarTodosDesenvolvedores(): Promise<any> {
    return this.http.get(this.usuariosUrl)
      .toPromise()
      .then(response => response.json());
  }



}
