import { TelaModule } from './tela/tela.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//TELAS+ROTAS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { InserirQuestaoComponent } from './inserir-questao/inserir-questao.component';


//PRIME NG
import { AccordionModule, ChipsModule } from 'primeng/primeng';     
import { ContextMenuModule, ButtonModule, TabMenuModule, MenubarModule } from 'primeng/primeng';
import { MenuItem} from "primeng/components/common/api";
import { PasswordModule } from 'primeng/primeng';
import { InputTextModule } from "primeng/components/inputtext/inputtext";
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { RadioButtonModule, SlideMenuModule, GrowlModule } from 'primeng/primeng';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { UsuarioService } from './usuario.service';
import { CadastroComponent } from './cadastro/cadastro.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InserirQuestaoComponent,
    ListarUsuariosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing, 
    AccordionModule,
    ButtonModule, 
    TabMenuModule,
    PasswordModule,
    ChipsModule,
    InputTextModule,
    ContextMenuModule,
    MenubarModule,
    RadioButtonModule,
    SlideMenuModule, 
    TelaModule,
    DataTableModule,
    SharedModule,
    GrowlModule,

    ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
