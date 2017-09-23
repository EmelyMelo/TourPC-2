import { Usuario } from './../Model/Usuario';
import { Component, OnInit } from '@angular/core';
import { ServicoUsuarioService } from "../servico-usuario.service";

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.css']
})
export class AdicionarUsuarioComponent implements OnInit {
  usuario:Usuario;
  
    constructor(private servico:ServicoUsuarioService) {
      this.usuario = new Usuario();
     }

  ngOnInit() {
  }
  salvar(){
    this.servico.salvar(this.usuario);
  }
}
