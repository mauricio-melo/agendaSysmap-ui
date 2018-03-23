import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lider',
  templateUrl: './perfil-lider.component.html',
  styleUrls: ['./perfil-lider.component.css']
})
export class PerfilLiderComponent {

  lideres = [
    {name: 'Bruno'},
    {name: 'Fabio'},
    {name: 'Vançam'},
  ];

}
