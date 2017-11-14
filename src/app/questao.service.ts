import { Questao } from './models/Questao';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class QuestaoService {

  questoes: Questao[] = new Array<Questao>();
  questao: Questao = new Questao();

  constructor(private route: Router) {
    this.questao.id = 0;    
    let q1 = new Questao();
    q1.assunto = "fonte";
    q1.enunciado = "bla";
    q1.id = 1;
    let q2 = new Questao();
    q2.assunto = "hd";
    q2.enunciado = "ble";
    q2.id = 2;
    this.questoes.push(q1);
    this.questoes.push(q2);
   }

  adicionar(questao:Questao){
    this.questoes.push(questao);
    this.questao.id ++;    
  }
  listar(){
    return this.questoes;
  }
  apagar(id: number){
    if(this.questao.id == id){
      this.questoes.slice(id,1);
    }
  }
  atualizar(questao: Questao){
    for(let i:number=0;i<this.questoes.length;i++){
        if(this.questao.id == this.questoes[i].id){
          this.questoes[i] = this.questao;
        }
    }
    
  }
}
