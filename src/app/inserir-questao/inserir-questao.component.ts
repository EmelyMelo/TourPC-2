import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import { Message } from 'primeng/components/common/api';


@Component({
  selector: 'app-inserir-questao',
  templateUrl: './inserir-questao.component.html',
  styleUrls: ['./inserir-questao.component.css']
})
export class InserirQuestaoComponent implements OnInit {
  route: any;
  msgs: Message[];
  componentes: SelectItem[];
  
      selectedComponent: string;
  
      constructor() {
          this.componentes = [];
          this.componentes.push({label:'Fonte', value:'fonte'});
          this.componentes.push({label:'HD', value:'hd'});
          this.componentes.push({label:'Memória', value:'memoria'});
          this.componentes.push({label:'Placa de áudio', value:'placa-de-audio'});
          this.componentes.push({label:'Placa de rede', value:'placa-de-rede'});
          this.componentes.push({label:'Placa de vídeo', value:'placa-de-video'});
          this.componentes.push({label:'Placa mãe', value:'placa-mae'});
          this.componentes.push({label:'Portas', value:'portas'});
          this.componentes.push({label:'Processador', value:'processador'});
      }
  ngOnInit() {
  }
  salvar(){
    this.msgs.push({severity:'sucess', summary:'Operação realizada com sucesso', detail:'Questão enviada'});
    this.route.navigate(["tela"]);
  }

}
