import {Injectable} from '@angular/core';
import {createOfflineCompileUrlResolver} from '@angular/compiler';

@Injectable()
export class StatisticsService {

  response: Object;

  constructor() {
    this.response = {};
  }

  /*
    0 - Quali nominal
    1 - Quali ordinal

    2 - Quanti discreta
    3 - Quanti continua
  */

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
    const total = this.totalItems(obj, 'qtd');
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
    const total = this.totalItems(obj, 'qtd');
    let acm = 0;
    obj.forEach((el) => {
      acm += el.qtd / total;
      el.facP = acm;
    });
  }

  qualitativa(info) {
    this.percent(info.content);
    this.frequencyAmass(info.content);
    this.frequencyPercent(info.content);
    this.response = info;
  }

  quantitativaDiscreta(info) {
    this.percent(info.content);
    this.frequencyAmass(info.content);
    this.frequencyPercent(info.content);
    this.desvioPadrao(info);
    info.media = this.mediaPonderada(info.content);
    this.mediana(info);
    this.response = info;
  }

  quantitativaContinua(info) {
    this.percent(info.content);
    this.frequencyAmass(info.content);
    this.frequencyPercent(info.content);
    this.desvioPadrao(info);
    info.media = this.mediaPonderada(info.content);
    info.mediana = this.mediana(info);
    // info.content = this.orderBy(info);
    info.content = this.buildInterval(info);
    this.response = info;
  }

  identifyTypeVariable(info) {
    console.log(info);
    let isQuantitativa = null;
    let error;

    info.content.forEach((dado) => {
      if (isQuantitativa === null) {
        isQuantitativa = !isNaN(dado.group);
      } else {
        if (isQuantitativa !== !isNaN(dado.group)) {
          error = true;
          return;
        }
      }
    });
    if (error) {
      console.log('Não conseguimos identificar se a variavel é quanti ou quali');
      return;
    }
    if (isQuantitativa) {
      if (info.content.length > 10) {
        console.log('Quantivativa continua');
        info.type = 3;
        this.quantitativaContinua(info);

      } else {
        console.log('Quantivativa discreta');
        info.type = 2;
        this.quantitativaDiscreta(info);
      }
    } else {
      if (info.ordinal) {
        console.log('Qualitativa ordinal');
        info.type = 1;
        this.qualitativa(info);
      } else {
        console.log('Qualitativa nominal');
        info.type = 0;
        this.qualitativa(info);
      }

    }
  }

  totalItems(array, property) {
    let total = 0;
    array.forEach((obj) => {
      total += obj[property];
    });

    return total;
  }

  desvioPadrao(info) {
    // SOMATORIA DE VALOR
    console.log(info);
    console.log(this.mediaPonderada(info.content));

    let numerador = 0;
    let denominador = 0;

    info.content.forEach(num => {
      numerador += Math.pow(num.group - this.mediaPonderada(info.content), 2) * num.qtd;
    });

    info.content.forEach(num => {
      denominador += num.qtd;
    });
    if (info.amostra === 'S') {
      denominador--;
    }
    info.desvioPadrao = Math.sqrt(numerador / denominador);
  }

  mediaPonderada(info) {
    const media = 0;
    let numerador = 0;
    let denominador = 0;
    info.forEach(num => {
      numerador += num.group * num.qtd;
    });
    info.forEach(num => {
      denominador += num.qtd;
    });
    return numerador / denominador;
  }

  mediana(info) {
    console.log('MEDIANA');
    console.log(info);
    let somatorio = info.content[info.content.length - 1].fac;

    if (somatorio % 2 === 0) {
      const pos = [(somatorio / 2) - 1, (somatorio / 2)];
      let arrayData = [];

      info.content.forEach((num, index) => {
        for (let i = 0; i < num.qtd; i++) {
          arrayData.push(num.group);
        }
      });
      return (parseFloat(arrayData[pos[0]]) + parseFloat(arrayData[pos[1]])) / 2;
    } else {
      return (somatorio + 1) / 2;
    }
  }

  orderBy(el) {
    let response = el.sort((a, b) => {
      return (parseFloat(a.group) < parseFloat(b.group)) ? -1 : ((parseFloat(a.group) > parseFloat(b.group)) ? 1 : 0);
    });
    return response;
  }

  buildInterval(info) {
    const contentOrdenado = this.orderBy(info.content);
    console.log('ORDENADO', contentOrdenado);
    let amplitude = parseFloat(contentOrdenado[contentOrdenado.length - 1].group) - parseFloat(contentOrdenado[0].group);
    console.log('AMPLITUDE', amplitude);

    // CLASSE

    const K = Math.sqrt(contentOrdenado.length);
    console.log('K', K);


    const classes = [Math.trunc(K) - 1, Math.trunc(K), Math.trunc(K) + 1];
    console.log(classes);

    // INCREMENTA
    amplitude++;

    let intervalo;
    let qtdGrupos;
    let find;
    do {
      // for (let i = 0; i < classes.length; i++) {
      // Pegando o maior numero entre as classes encontradas
      const res = amplitude / classes[2];
      if (Number.isInteger(res)) {
        find = true;
        intervalo = res;
        qtdGrupos = classes[2];

        // }
      }
      amplitude++;
    } while (!find);

    console.log('Grupos', qtdGrupos);
    console.log('Intervalo', intervalo);
    console.log('Ordenado', contentOrdenado);

    // ARRAY COM O VALOR MIN E MAX DE CADA CLASSE
    const groupValue = [];
    // MONTANDO O INTERVALO
    let lastValue = contentOrdenado[0].group;
    for (let i = 1; i <= qtdGrupos; i++) {
      groupValue.push({id: i, min: lastValue, max: lastValue + intervalo});
      lastValue = lastValue + intervalo;
    }
    console.log(groupValue);

    // DEFININDO CLASSE PARA CADA OBJETO
    contentOrdenado.forEach((obj) => {
      groupValue.forEach((group) => {
        if (obj.group >= group.min && obj.group < group.max) {
          obj.class = group;
        }
      });
    });


    const res = [];
    groupValue.forEach((group) => {
      const temp = [];
      contentOrdenado.forEach((obj) => {
        if (group.id === obj.class.id) {
          temp.push(obj);
        }
      });
      const soma = { fac: 0, facP: 0, percent: 0, qtd: 0, group: '' };
      temp.forEach((obje) => {
        soma.fac = obje.fac;
        soma.facP = obje.facP;
        soma.percent += obje.percent;
        soma.qtd += obje.qtd;
        soma.group = `De ${group.min} á ${group.max}`;
      });

      res.push(soma);
    });
    console.log('RES', res);

    return res;

  }
}
