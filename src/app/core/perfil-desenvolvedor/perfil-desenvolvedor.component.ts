import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-desenvolvedor',
  templateUrl: './perfil-desenvolvedor.component.html',
  styleUrls: ['./perfil-desenvolvedor.component.css']
})
export class PerfilDesenvolvedorComponent {
  desenvolvedores = [
    {name: 'Mauricio'},
    {name: 'Agnaldo'},
    {name: 'Lucas'},
    {name: 'Thiago'},
  ];
}
