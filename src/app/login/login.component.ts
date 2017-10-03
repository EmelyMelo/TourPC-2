import { Component, OnInit } from '@angular/core';
import { Usuario } from "../models/Usuario";
import { Router } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import { UsuarioService } from '../usuario.service';
//import {MessageService} from 'primeng/components/common/messageservice';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	//providers: [MessageService]
	})
	export class LoginComponent implements OnInit {
	usuarios: Usuario[] = [];
	usuario: Usuario = new Usuario(); 
	constructor(private usuarioService: UsuarioService, private route: Router) {}
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
	carregarLista(){
		this.route.navigate(['usuarios']);
	}
}