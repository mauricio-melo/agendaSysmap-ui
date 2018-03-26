import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

import { environment } from './../../environments/environment';
import { Compromisso } from '../core/model';

@Injectable()
export class CompromissoService {

  compromissoUrl: string;

  constructor(private http: Http) {
    this.compromissoUrl = `${environment.apiUrl}/compromisso`;
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
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.compromissoUrl, { headers }, JSON.stringify(compromisso))
      .toPromise()
      .then(response => response.json());
  }

  atualizar(compromisso: Compromisso): Promise<Compromisso> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.put(`${this.compromissoUrl}/${compromisso.id}`, { headers }, JSON.stringify(compromisso))
      .toPromise()
      .then(response => {
        const compromissoAlterado = response.json() as Compromisso;

        this.converterStringsParaDatas([compromissoAlterado]);

        return compromissoAlterado;
      });
  }

  buscarPorCodigo(id: number): Promise<Compromisso> {
    return this.http.get(`${this.compromissoUrl}/${id}`)
      .toPromise()
      .then(response => {
        const compromisso = response.json() as Compromisso;

        this.converterStringsParaDatas([compromisso]);

        return compromisso;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.compromissoUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  private converterStringsParaDatas(compromissos: Compromisso[]) {
    for (const compromisso of compromissos) {
      compromisso.inicio = moment(compromisso.inicio,
        'YYYY-MM-DD').toDate();

      compromisso.termino = moment(compromisso.termino,
        'YYYY-MM-DD').toDate();
    }
  }


}
