import { Injectable } from '@angular/core';
	

@Injectable()
export class UsuarioService {
  
  private usuarios: string[] = ['Teste 1', 'Teste 2', 'Teste 3'];
  constructor() { }

  getUsuarios() {
    return this.usuarios;
  }
  addUsuario(usuario: string){
    this.usuarios.push(usuario);
  }
}
