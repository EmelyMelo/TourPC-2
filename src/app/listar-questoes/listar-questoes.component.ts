import { Component, OnInit } from '@angular/core';
import { Questao } from 'app/models/Questao';
import { QuestaoService } from 'app/questao.service';

@Component({
  selector: 'app-listar-questoes',
  templateUrl: './listar-questoes.component.html',
  styleUrls: ['./listar-questoes.component.css']
})
export class ListarQuestoesComponent implements OnInit {
  questoes: Questao[];
  
  brands: SelectItem[];
  
  colors: SelectItem[];
  
  yearFilter: number;
  
  constructor(private questaoService: QuestaoService) {}

  ngOnInit() {
      this.questaoService.get();
      
      this.brands = [];
      this.brands.push({label: 'All Brands', value: null});
      this.brands.push({label: 'Audi', value: 'Audi'});
      this.brands.push({label: 'BMW', value: 'BMW'});
      this.brands.push({label: 'Fiat', value: 'Fiat'});
      this.brands.push({label: 'Honda', value: 'Honda'});
      this.brands.push({label: 'Jaguar', value: 'Jaguar'});
      this.brands.push({label: 'Mercedes', value: 'Mercedes'});
      this.brands.push({label: 'Renault', value: 'Renault'});
      this.brands.push({label: 'VW', value: 'VW'});
      this.brands.push({label: 'Volvo', value: 'Volvo'});
      
      this.colors = [];
      this.colors.push({label: 'White', value: 'White'});
      this.colors.push({label: 'Green', value: 'Green'});
      this.colors.push({label: 'Silver', value: 'Silver'});
      this.colors.push({label: 'Black', value: 'Black'});
      this.colors.push({label: 'Red', value: 'Red'});
      this.colors.push({label: 'Maroon', value: 'Maroon'});
      this.colors.push({label: 'Brown', value: 'Brown'});
      this.colors.push({label: 'Orange', value: 'Orange'});
      this.colors.push({label: 'Blue', value: 'Blue'});
  }
}

}
