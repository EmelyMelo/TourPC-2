
import { Usuario } from './../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/usuario.service';


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuario: Usuario;
  usuarios: string [] = [];
//usuarioService: UsuarioService;

  constructor(private usuarioService: UsuarioService) {
    //this.usuarioService = new UsuarioService();
    //this.usuarioService = _usuarioService;
  }

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios();	
  }

}
