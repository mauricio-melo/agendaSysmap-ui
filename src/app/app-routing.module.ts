import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilEscolhaComponent } from './perfil/perfil-escolha/perfil-escolha.component';
import { PerfilDesenvolvedorComponent } from './perfil/perfil-desenvolvedor/perfil-desenvolvedor.component';
import { PerfilLiderComponent } from './perfil/perfil-lider/perfil-lider.component';
import { CompromissoEquipeComponent } from './compromissos/compromisso-equipe/compromisso-equipe.component';
import { CompromissoUsuarioComponent } from './compromissos/compromisso-usuario/compromisso-usuario.component';
import { CompromissoCadastroDevComponent } from './compromissos/compromisso-cadastro-dev/compromisso-cadastro-dev.component';
import { CompromissoCadastroEquipeComponent } from './compromissos/compromisso-cadastro-equipe/compromisso-cadastro-equipe.component';


const routes: Routes = [
  { path: '', component: PerfilEscolhaComponent},
  { path: 'desenvolvedor', component: PerfilDesenvolvedorComponent},
  { path: 'lider', component: PerfilLiderComponent},
  { path: 'lider/compromissos/equipe/:id', component: CompromissoEquipeComponent},
  { path: 'desenvolvedor/compromissos/usuario/:id', component: CompromissoUsuarioComponent},
  { path: 'desenvolvedor/compromissos/usuario/:id/:id', component: CompromissoCadastroDevComponent},
  { path: 'desenvolvedor/compromissos/usuario/novoCompromisso', component: CompromissoCadastroDevComponent},
  { path: 'lider/compromissos/equipe/:id/:id', component: CompromissoCadastroEquipeComponent},
  { path: 'lider/compromissos/equipe/novoCompromisso', component: CompromissoCadastroEquipeComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
