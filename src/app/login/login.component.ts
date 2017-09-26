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
		usuarios:string [] = ['Emely', 'maria', 'claudio'];
		
			constructor() { 
			 
			}
		
			ngOnInit() {
			}
	
		
		}