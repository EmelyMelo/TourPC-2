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
		ServicoUsuarioService: any;
		private usuarios: Usuario[];
		private usuario: Usuario;
		private idEditar: number;
		
			constructor(private servicoUsuarioService: ServicoUsuarioService ) {
			}
			ngOnInit() {
				this.usuario = new Usuario();
				this.idEditar = -1;
				//this.usuario = this.ServicoUsuarioService.listarTodos();
			}
			entrar(){
				
				console.log("Usuário: "+this.usuario.username);
				console.log("Senha: "+this.usuario.senha);
				
			}
			salvar(){
				//this.ServicoUsuarioService.cadastrar(this.usuario);
				//this.usuario = new Usuario;

				console.log("Nome: "+this.usuario.nome);
				console.log("Usuário: "+this.usuario.username);
				console.log("Senha: "+this.usuario.senha);
				console.log("Tipo de usuário: "+this.usuario.tipoDeUsuario);
			}

			editar(id: number) {
				this.idEditar = id;
				this.usuario = new Usuario(); //COLOCAR PARAMETROS
			}
			atualizar() {
				this.ServicoUsuarioService.atualizar(this.idEditar, this.usuario);
				this.usuario = new Usuario();
				this.idEditar = -1;
			}
		 
			excluir(id: number) {
				this.ServicoUsuarioService.excluir(id);
				this.idEditar = -1;
			}
		
		}