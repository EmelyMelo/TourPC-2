
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'app/usuario.service';
import { Usuario } from 'app/models/Usuario';


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuario: Usuario;
  usuarios: Usuario [] = [];
//usuarioService: UsuarioService;

  constructor(private usuarioService: UsuarioService) {
    //this.usuarioService = new UsuarioService();
    //this.usuarioService = _usuarioService;
    this.usuarioService.getUsuarios()
    
  }

  ngOnInit() {
    this.usuarios = this.usuarioService.getUsuarios()
    
  } 

}
