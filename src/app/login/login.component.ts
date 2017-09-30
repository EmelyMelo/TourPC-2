			import { Component, OnInit } from '@angular/core';
			import { Usuario } from "../models/Usuario";
			import { UsuarioService } from 'app/usuario.service';

			@Component({
				selector: 'app-login',
				templateUrl: './login.component.html',
				styleUrls: ['./login.component.css']
				
			})
			export class LoginComponent implements OnInit {
			usuarios: string [] = []; 
			constructor(private usuarioService: UsuarioService) {
			}
			ngOnInit() {
				this.usuarios = this.usuarioService.getUsuarios();
			}
				entrar(){
					console.log("Usuário: "+this.usuarios);
					
				}
				salvar(nome: string){
					this.usuarioService.addUsuario(nome);
				}
}