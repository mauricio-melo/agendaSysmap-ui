import { CompromissoListaEquipeComponent } from './compromissos/compromisso-lista-equipe/compromisso-lista-equipe.component';
import { CompromissoListaDevComponent } from './compromissos/compromisso-lista-dev/compromisso-lista-dev.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilEscolhaComponent } from './perfil/perfil-escolha/perfil-escolha.component';
import { PerfilDesenvolvedorComponent } from './perfil/perfil-desenvolvedor/perfil-desenvolvedor.component';
import { PerfilLiderComponent } from './perfil/perfil-lider/perfil-lider.component';
import { CompromissoCadastroDevComponent } from './compromissos/compromisso-cadastro-dev/compromisso-cadastro-dev.component';
import { CompromissoCadastroEquipeComponent } from './compromissos/compromisso-cadastro-equipe/compromisso-cadastro-equipe.component';


const routes: Routes = [
  { path: '', component: PerfilEscolhaComponent},
  { path: 'desenvolvedor', component: PerfilDesenvolvedorComponent},
  { path: 'lider', component: PerfilLiderComponent},
  { path: 'lider/compromissos/equipe/:id', component: CompromissoListaEquipeComponent},
  { path: 'desenvolvedor/compromissos/usuario/:id', component: CompromissoListaDevComponent},
  { path: 'desenvolvedor/compromissos/usuario/dev/:idCompromisso', component: CompromissoCadastroDevComponent},
  { path: 'desenvolvedor/compromissos/usuario/dev/novoCompromisso/:id', component: CompromissoCadastroDevComponent},
  { path: 'lider/compromissos/equipe/dev/:id', component: CompromissoCadastroEquipeComponent},
  { path: 'lider/compromissos/equipe/dev/novoCompromisso/:id', component: CompromissoCadastroEquipeComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
