import { SelectItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { Questao } from 'app/models/Questao';
import { QuestaoService } from 'app/questao.service';

@Component({
  selector: 'app-listar-questoes',
  templateUrl: './listar-questoes.component.html',
  styleUrls: ['./listar-questoes.component.css']
})
export class ListarQuestoesComponent implements OnInit {
  
  questao: Questao = new Questao();

  constructor(private questaoService: QuestaoService) { }

  ngOnInit() {}

  listar(){
    return this.questaoService.listar();
  }
  
}

