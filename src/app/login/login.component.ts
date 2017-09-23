	import { Component, OnInit } from '@angular/core';
	import { Usuario } from "../Model/Usuario";
	import { ServicoUsuarioService } from 'app/servico-usuario.service';

	@Component({
		providers:[ServicoUsuarioService],
		selector: 'app-login',
		templateUrl: './login.component.html',
		styleUrls: ['./login.component.css']
	})
	export class LoginComponent implements OnInit {
		usuario:Usuario;
		
			constructor() { 
				this.usuario = new Usuario();
			 
			}
		
			ngOnInit() {
			}
		
			entrar(){
				if(this.usuario.senha == ""){
		
				}
				console.log("Usuário: "+this.usuario.username);
				console.log("Senha: "+this.usuario.senha);
				
			}
			salvar(){
				console.log("Nome: "+this.usuario.nome);
				console.log("Usuário: "+this.usuario.username);
				console.log("Senha: "+this.usuario.senha);
				console.log("Tipo de usuário: "+this.usuario.tipoDeUsuario);
			}
		
		}