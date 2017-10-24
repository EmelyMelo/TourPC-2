import { Questao } from './models/Questao';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class QuestaoService {
  private questoes: Questao[] = new Array<Questao>();
  questao: Questao = new Questao();
  constructor(private route: Router) { }

  adicionar(questao:Questao){
    this.questoes.push(questao);
  }
  get(){
    return this.questoes;
  }
}
