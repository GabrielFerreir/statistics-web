import { Injectable } from '@angular/core';

@Injectable()
export class StatisticsService {

  constructor() { }

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
    this.percent(obj, info.length);
    this.frequencyAmass(obj);
    this.frequencyPercent(obj, info.length);

    return obj;
  }

  percent(obj, total) {
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

  frequencyPercent(obj, total) {
    let acm = 0;
    obj.forEach((el) => {
      acm += el.qtd / total;
      el.facP = acm;
    });
  }

}
