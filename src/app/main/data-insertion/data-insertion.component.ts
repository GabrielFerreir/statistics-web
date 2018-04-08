import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-insertion',
  templateUrl: './data-insertion.component.html',
  styleUrls: ['./data-insertion.component.scss']
})
export class DataInsertionComponent implements OnInit {

  info: any;

  selectSufixo: any[];


  constructor() {
    this.info = {
      dados: []
    };

    this.selectSufixo = [
      { id: 1, nome: 'Sem sufixo' },
      { id: 2, nome: 'Metro' },
      { id: 3, nome: 'Kg' },
      { id: 4, nome: 'Centimetros' }
    ];

  }

  ngOnInit() {

  }

  insertData() {
    if (this.info.currentDado && this.info.currentDado.length) {
      let isExists = false;
      this.info.dados.forEach((dado) => {
        if (dado.name === this.info.currentDado) {
          dado.qtd++;
          isExists = true;
        }
      });
      if (!isExists) {
        console.log('!isExists');
        const obj = {
          name: this.info.currentDado,
          qtd: 1
        }
        this.info.dados.push(obj);
      }
      this.info.currentDado = null;
    }
  }

  removeData(index) {
    if(this.info.dados[index].qtd > 1) {
      this.info.dados[index].qtd--;
      return;
    }
      this.info.dados.splice(index, 1);
    }


}
