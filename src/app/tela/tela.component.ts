import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/components/common/api";

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            //COLOCAR LOGO
        {label: 'Home', routerLink: ['/tela']},
        {label: 'Fonte', routerLink: ['/tela']},
        {label: 'HD', routerLink: ['/tela']},
        {label: 'Memória', routerLink: ['/tela']},
        {label: 'Placa de áudio', routerLink: ['/tela']},
        {label: 'Placa de rede', routerLink: ['/tela']},
        {label: 'Placa de vídeo', routerLink: ['/placa-de-video']},   
        {label: 'Placa mãe', routerLink: ['/placa-mae']},
        {label: 'Portas', routerLink: ['/tela']},
        {label: 'Processador', routerLink: ['/tela']},
        


    ];
}      
}
