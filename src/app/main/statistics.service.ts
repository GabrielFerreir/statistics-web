import { Injectable } from '@angular/core';

@Injectable()
export class StatisticsService {

  response: Object;

  constructor() {
    this.response = {};
  }

  getDados() {
    return this.response;
  }

  countRepeat(info) {
    const obj = [];
    const func = {
      insere: (group, qtd) => {
        let condicao;
        obj.forEach((el) => {
          if (el.group === group) {
            condicao = true;
          }
        });
        if (!condicao) {
          obj.push({group: group, qtd: qtd});
        }
      }
    };

    for (var i = 0; i < info.length; i++) {
      let repeat = 0;
      for (var j = 0; j < info.length; j++) {
        if (info[i] === info[j]) {
          repeat++;
        }
      }
      func.insere(info[i], repeat);
    }
    this.percent(obj);
    this.frequencyAmass(obj);
    this.frequencyPercent(obj);

    return obj;
  }

  percent(obj) {

    let total = 0;
    obj.forEach((q) => {
      total += q.qtd;
    })


    obj.forEach((el) => {
      el.percent = el.qtd / total;
    });
  }

  frequencyAmass(obj) {
    let acm = 0;
    obj.forEach((el) => {
      acm += el.qtd;
      el.fac = acm;
    });
  }

  frequencyPercent(obj) {
    let total = 0;
    obj.forEach((q) => {
      total += q.qtd;
    })

    let acm = 0;
    obj.forEach((el) => {
      acm += el.qtd / total;
      el.facP = acm;
    });
  }

  qualitativaNominal(info) {
    this.percent(info.dados);
    this.frequencyAmass(info.dados);
    this.frequencyPercent(info.dados);
    this.response = info;
  }

  quantitativaDiscreta(info) {
    this.percent(info.dados);
    this.frequencyAmass(info.dados);
    this.frequencyPercent(info.dados);
    this.response = info;
  }

  identifyTypeVariable(info) {
    console.log(info);
    let isQuantitativa = null;
    let error;

    info.dados.forEach((dado) => {
      if(isQuantitativa === null) {
        isQuantitativa = !isNaN(dado.group);
      } else {
        if(isQuantitativa !== !isNaN(dado.group)) {
          error = true;
          return;
        }
      }
    });
    if(error) {
      console.log('Não conseguimos identificar se a variavel é quanti ou quali');
      return;
    } 
    console.log(isQuantitativa ? 'Quantitativa' : 'Qualitativa');
    if(isQuantitativa) {
      if(info.dados.length > 10) {
        console.log('Quantivativa continua');
      } else {
        console.log('Quantivativa discreta');
        this.quantitativaDiscreta(info);
      }
    } else {
      console.log('Identificou que a variavel é quali');
      console.log('Todas as variaveis quali estão sendo tratadas como nominal');
      this.qualitativaNominal(info);
    }
  }

}
