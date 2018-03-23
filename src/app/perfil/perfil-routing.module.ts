import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfilEscolhaComponent } from './perfil-escolha/perfil-escolha.component';
import { PerfilDesenvolvedorComponent } from './perfil-desenvolvedor/perfil-desenvolvedor.component';
import { PerfilLiderComponent } from './perfil-lider/perfil-lider.component';

const routes: Routes = [
  {path: 'perfil-escolha', component: PerfilEscolhaComponent},
  {path: 'perfil-desenvolvedor', component: PerfilDesenvolvedorComponent},
  {path: 'perfil-lider', component: PerfilLiderComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
