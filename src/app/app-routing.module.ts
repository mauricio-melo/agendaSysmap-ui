import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilEscolhaComponent } from './perfil/perfil-escolha/perfil-escolha.component';
import { PerfilDesenvolvedorComponent } from './perfil/perfil-desenvolvedor/perfil-desenvolvedor.component';
import { PerfilLiderComponent } from './perfil/perfil-lider/perfil-lider.component';
import { CompromissoEquipeComponent } from './compromissos/compromisso-equipe/compromisso-equipe.component';
import { CompromissoUsuarioComponent } from './compromissos/compromisso-usuario/compromisso-usuario.component';


const routes: Routes = [
  { path: '', component: PerfilEscolhaComponent},
  { path: 'perfil-desenvolvedor', component: PerfilDesenvolvedorComponent},
  { path: 'perfil-lider', component: PerfilLiderComponent},
  { path: 'compromisso-equipe', component: CompromissoEquipeComponent},
  { path: 'compromisso-usuario', component: CompromissoUsuarioComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
