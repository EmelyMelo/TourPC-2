			import { Component, OnInit } from '@angular/core';
			import { Usuario } from "../models/Usuario";
			import { UsuarioService } from 'app/usuario.service';
			import { Router } from '@angular/router';
			import {Message} from 'primeng/components/common/api';
			//import {MessageService} from 'primeng/components/common/messageservice';
			

			@Component({
				selector: 'app-login',
				templateUrl: './login.component.html',
				styleUrls: ['./login.component.css'],
			//	providers: [MessageService]
				
			})
			export class LoginComponent implements OnInit {
			usuarios: Usuario[] = [];
			usuario: Usuario = new Usuario(); 
			msgs: Message[] = [];
			constructor(private usuarioService: UsuarioService, private route: Router) {

			}
			ngOnInit() {
				this.usuarios = this.usuarioService.getUsuarios();
			}
			entrar(usuario: Usuario){
			let podePassar:boolean = false;	
			podePassar = this.usuarioService.verificar(this.usuario);
			if(podePassar){
				this.route.navigate(["tela"]);
			}else{
				alert("Se cadastra peste!");
			}
					
			}
			salvar(usuario: Usuario){
				this.usuarioService.addUsuario(this.usuario);
				console.log(this.usuarios);
			}

			carregarLista(){
				this.route.navigate(['usuarios']);
			}
}