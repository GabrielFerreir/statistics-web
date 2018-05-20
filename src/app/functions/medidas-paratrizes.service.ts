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

  comum(content) {
    console.log('Medida separatriz');
    content = this.utilsService.orderBy(content);
    const somatorio = content.length;
    if (somatorio % 2 === 0) {
      const v1 = content[somatorio / 2];
      const v2 = content[(somatorio / 2) - 1];
      const Q2 = (v1.group + v2.group) / 2;
      const menores = this.buildArray(content, '<', (somatorio / 2) + 1);
      const Q1 = this.findMediana((menores));

      const maiores = this.buildArray(content, '>', (somatorio / 2));
      const Q3 = this.findMediana(maiores);
      return [Q1, Q2, Q3];
    } else {
      const Q2 = content[((somatorio + 1) / 2) - 1];
      const menores = this.buildArray(content, '<', (somatorio + 1) / 2);
      const maiores = this.buildArray(content, '>', (somatorio + 1) / 2);
      const Q1 = this.findMediana((menores));
      const Q3 = this.findMediana(maiores);
      return [Q1, Q2, Q3];
    }

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
}
