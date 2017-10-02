import { Injectable } from '@angular/core';
import { Usuario } from 'app/models/Usuario';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {
  
  private usuarios: Usuario[] = [];
  constructor(private route: Router) { }
  usuario: Usuario= new Usuario();
  getUsuarios() {
    return this.usuarios;
  }
  addUsuario(usuario: Usuario){
    this.usuarios.push(usuario);
  }
  verificar(usuario:Usuario){
    let ehValido:boolean = false; 
    for(let i:number =0;i<this.usuarios.length;i++){
      if(this.usuarios[i].username == this.usuario.username && this.usuarios[i].senha == this.usuario.senha){
        ehValido = true;
      }else{
        alert("Por favor, faça o seu cadastro!")
      }
    }
   
    return ehValido;	
  }
}
