import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { Compromisso } from '../core/model';

@Injectable()
export class CompromissoService {

  compromissoUrl: string;

  constructor(private http: Http) {
    this.compromissoUrl = `${environment.apiUrl}/compromisso/`;
   }

   listarCompromissosPorUsuario(): Promise<any> {
    return this.http.get(`${this.compromissoUrl}/usuario/3`)
      .toPromise()
      .then(response => {
        const compromisso = response.json() as Compromisso;
        return compromisso;
      });
   }

   listarCompromissosPorEquipe(): Promise<any> {
    return this.http.get(`${this.compromissoUrl}/equipe/1`)
      .toPromise()
      .then(response => {
        const compromisso = response.json() as Compromisso;
        return compromisso;
      });
   }


}
