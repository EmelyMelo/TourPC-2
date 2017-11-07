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

  displayDialog: boolean;
  novaQuestao = true;
  questao: Questao = new Questao();
  questoes: Questao[] = [];

  constructor(private questaoService: QuestaoService) { }

  ngOnInit() { }

  visualizarDetalhesQuestao(event) {
    this.novaQuestao = false;
    this.questao = this.cloneQuestao(event.data);
    this.displayDialog = true;
    console.log("entrou");
  }
  showDialogToAdd() {
    this.novaQuestao = true;
    this.questao = new Questao();
    this.displayDialog = true;
  }
  cloneQuestao(questao: Questao): Questao {
    let quest = new Questao();
    for (let prop in questao) {
      quest[prop] = questao[prop];
    }
    return quest;
  }

  findSelectedCarIndex(): number {
    return this.questaoService.questoes.indexOf(this.questao);
  }
  salvar() {
    let questoes = [... this.questoes];
    if (this.novaQuestao)
      this.questaoService.questoes.push(this.questao);
    else
      this.questaoService.questoes[this.findSelectedCarIndex()] = this.questao;
    this.questoes = questoes;
    this.questao = null;
    this.displayDialog = false;
    this.questaoService.questoes = this.questoes;
    alert("salvo");
  }

  listar() {
    return this.questaoService.listar();
  }
  deletar() {
    let id = this.findSelectedCarIndex();
    this.questoes = this.questoes.filter((val, i) => i != id);
    this.questao = null;
    this.displayDialog = false;
    this.questaoService.questoes = this.questoes;
  }
  atualizar() {
    this.questaoService.atualizar(this.questao);
  }

}

