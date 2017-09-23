import { TelaModule } from './tela/tela.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//TELAS+ROTAS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { InserirQuestaoComponent } from './inserir-questao/inserir-questao.component';
import { AdicionarUsuarioComponent } from './adicionar-usuario/adicionar-usuario.component';


//PRIME NG
import { AccordionModule, ChipsModule } from 'primeng/primeng';     
import { ContextMenuModule, ButtonModule, TabMenuModule, MenubarModule } from 'primeng/primeng';
import { MenuItem} from "primeng/components/common/api";
import { PasswordModule } from 'primeng/primeng';
import { InputTextModule } from "primeng/components/inputtext/inputtext";

import { RadioButtonModule, SlideMenuModule } from 'primeng/primeng';
import { ServicoUsuarioService } from 'app/servico-usuario.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdicionarUsuarioComponent,
    InserirQuestaoComponent
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
    TelaModule
    
    ],
  providers: [ServicoUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
