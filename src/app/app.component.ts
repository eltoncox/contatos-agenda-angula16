import { Component } from '@angular/core';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { ContatoModel } from './modelos/contato-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de Contatos com Angular 16';
  contatoclicado?: ContatoModel; // Definir a propriedade contatoclicado

  constructor(private dataBaseService: ContatosDataBaseService) {}

  enviarDetalhe(id: number): void {
    this.contatoclicado = this.dataBaseService.getContato(id);
  }
}
