import { Usuario } from './Model/Usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoUsuarioService {
  usuariosCadastrados:Usuario[] = [];
  
  constructor() { }
  salvar(usuario:Usuario){
    this.usuariosCadastrados.push(usuario);
  }
  
}
