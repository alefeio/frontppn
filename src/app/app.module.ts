import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { EscapeHtmlPipe } from './util/pipes/keep-html';
import { MenuComponent } from './menu/menu.component';
import { LadoDireitoComponent } from './lado-direito/lado-direito.component';
import { ContatoComponent } from './contato/contato.component';
import { TrabalheComponent } from './trabalhe/trabalhe.component';
import { DenuncieComponent } from './denuncie/denuncie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriaComponent,
    NoticiaComponent,
    EscapeHtmlPipe,
    MenuComponent,
    LadoDireitoComponent,
    ContatoComponent,
    TrabalheComponent,
    DenuncieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
