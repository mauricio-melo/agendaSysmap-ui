import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { Compromisso } from '../core/model';

@Injectable()
export class CompromissoService {

  compromissoUrl: string;

  constructor(private http: Http) {
    this.compromissoUrl = `${environment.apiUrl}/compromisso`;
  }

  listarCompromissosPorEquipe(): Promise<any> {
    return this.http.get(`${this.compromissoUrl}/equipe/1`)
      .toPromise()
      .then(response => {
        const compromisso = response.json() as Compromisso;
        return compromisso;
      });
  }

  listarCompromissosPorEquipeId(id: number): Promise<any> {
    return this.http.get(`${this.compromissoUrl}/equipe/${id}`)
      .toPromise()
      .then(response => {
        const compromisso = response.json() as Compromisso;
        return compromisso;
      });
  }

  listarCompromissosPorUsuarioId(id: number): Promise<any> {
    return this.http.get(`${this.compromissoUrl}/usuario/${id}`)
      .toPromise()
      .then(response => {
        const compromisso = response.json() as Compromisso;
        return compromisso;
      });
  }

  salvar(compromisso: Compromisso): Promise<Compromisso> {
    return this.http.post(this.compromissoUrl, JSON.stringify(compromisso))
      .toPromise()
      .then(response => response.json());
  }

  atualizar(compromisso: Compromisso): Promise<Compromisso> {
    return this.http.put(`${this.compromissoUrl}/${compromisso.id}`,
      JSON.stringify(compromisso))
      .toPromise()
      .then(response => response.json() as Compromisso);
  }


}
