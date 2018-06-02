import { Injectable } from '@angular/core';
import {UtilsService} from './utils.service';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class MedidasParatrizesService {

  teste = {
    title: 'Exemplo 8.1',
    content: [
      {group: 7, qtd: 1},
      {group: 13, qtd: 1},
      {group: 5, qtd: 1},
      {group: 12, qtd: 1},
      {group: 16, qtd: 1},
      {group: 4, qtd: 1},
      {group: 9, qtd: 1},
      {group: 15, qtd: 1},
      {group: 6, qtd: 1}
    ]
  };

  constructor(private utilsService: UtilsService) { }

  comum(content, type, value) {
    const unitaryValue = 100 / type;
    const findValue = value * unitaryValue;
    const size = content[content.length - 1].fac;
    const pos = (findValue * size) / 100;
    for (let i = 0; i < content.length; i++) {
      if (pos <= content[i].fac) {
        console.log('RESPOSTA: ', content[i].group);
        return content[i].group;
      }
    }
  }

  // comum(content) {
  //   console.log('Medida separatriz');
    // content = this.utilsService.orderBy(content);
    // const somatorio = content.length;
    // if (somatorio % 2 === 0) {
    //   const v1 = content[somatorio / 2];
    //   const v2 = content[(somatorio / 2) - 1];
    //   const Q2 = (v1.group + v2.group) / 2;
    //   const menores = this.buildArray(content, '<', (somatorio / 2) + 1);
    //   const Q1 = this.findMediana((menores));
    //
    //   const maiores = this.buildArray(content, '>', (somatorio / 2));
    //   const Q3 = this.findMediana(maiores);
    //   return [Q1, Q2, Q3];
    // } else {
    //   const Q2 = content[((somatorio + 1) / 2) - 1];
    //   const menores = this.buildArray(content, '<', (somatorio + 1) / 2);
    //   const maiores = this.buildArray(content, '>', (somatorio + 1) / 2);
    //   const Q1 = this.findMediana((menores));
    //   const Q3 = this.findMediana(maiores);
    //   return [Q1, Q2, Q3];
    // }
  // }

  continua(content, quartil) {
    const somatorio = content[content.length - 1].fac;
    const qk = quartil * somatorio / 4;
    const classeDoQuartil = this.findClassByFac(content, qk);
    console.log('QUARTIL');
    console.log(qk);
    console.log(classeDoQuartil);
    const classeAnteior = this.utilsService.findClassForId(content, classeDoQuartil.class.id - 1);
    const faa = classeAnteior ? classeAnteior.fac : 0;
    const fqk = classeDoQuartil.qtd;
    const lqk = classeDoQuartil.class.min;
    const hqk = classeDoQuartil.class.max - classeDoQuartil.class.min;
    const Q = lqk + ((qk - faa) / fqk) * hqk;
    console.log('Quatil', Q);
    return Q;

  }

  buildArray(content, condicao, valor) {
    // ARRAY, <>, Number
    return content.filter((item, index) => {
      if (condicao === '>') {
        return index + 1 > valor ? true : false;
      } else if (condicao === '<') {
        return index + 1 < valor ? true : false;
      }  else {
        console.error('Condicao invalida');
      }
    });
  }

  findMediana(content) {
    const somatorio = content.length;
    if (somatorio % 2 === 0) {
      const v1 = content[somatorio / 2].group;
      console.log('v1', v1);
      const v2 = content[(somatorio / 2) - 1].group;
      console.log('v2', v2);
      return (v1 + v2) / 2;
    } else {
      return content[((somatorio + 1) / 2) - 1].group;
    }
  }

  findClassByFac(content, valor) {
    for (let i = 0; i < content.length; i++) {
      if (valor < content[i].fac) {
        return content[i];
      }
    }
  }
}
