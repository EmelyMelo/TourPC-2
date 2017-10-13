import { Component, OnInit } from '@angular/core';
import { Usuario } from "../models/Usuario";
import { Router, ActivatedRoute } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = new Usuario();
  user: Usuario;
  constructor(private usuarioService: UsuarioService,  private route: Router, private rotaAtiva: ActivatedRoute) {
    this.user = this.rotaAtiva.snapshot.params['user'];
   }

  ngOnInit() {

  }
  salvar(usuario: Usuario){
    this.usuarioService.addUsuario(this.usuario);
    this.route.navigate(['login']);
  }
  }
 
