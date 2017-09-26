import { Usuario } from './Model/Usuario';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoUsuarioService {
  usuariosCadastrados:Usuario[] = [];
  
  constructor() { }
  listarTodos() {
		return this.usuariosCadastrados;
	}
 
	cadastrar(usuario: Usuario) {
		this.usuariosCadastrados.push(usuario);
	}
 
	atualizar(id: number, usuario: Usuario) {
		this.usuariosCadastrados[id] = usuario;
	}
 
	excluir(id: number) {
		this.usuariosCadastrados.splice(id, 1);
	}
  
}
