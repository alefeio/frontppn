import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CategoriaComponent } from './categoria/categoria.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ContatoComponent } from './contato/contato.component';
import { TrabalheComponent } from './trabalhe/trabalhe.component';
import { DenuncieComponent } from './denuncie/denuncie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'trabalhe', component: TrabalheComponent },
  { path: 'denuncie', component: DenuncieComponent },
  { path: 'categoria/:categoria', component: CategoriaComponent },
  { path: 'noticia/:url', component: NoticiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
