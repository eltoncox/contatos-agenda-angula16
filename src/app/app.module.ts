import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { DadosUsuarioComponent } from './dados-usuario/dados-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosUsuarioComponent,
    ListaUsuarioComponent,
    DetalheUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContatosDataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
