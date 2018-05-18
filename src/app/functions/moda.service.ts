import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModaService {

  constructor() { }

  comum(content) {
    let maior = 1;
    for (let i = 0; i < content.length; i++) {
      if (content[i].qtd > maior) {
        maior = content[i].qtd;
      }
    }
    const maiores = [];
    let acm;
    for (let i in content) {
      if (maior === content[i].qtd) {
        maiores.push(content[i].group);
        acm++;
      }
    }
    if (acm === content.length) {
      return 'Não há modal';
    }
    return maiores;
  }

  continua(groups) {
    const classeModal = [];

    let acm = 0;
    groups.content.forEach((group) => {
      acm = group.qtd > acm ? group.qtd : acm;
    });

    groups.content.forEach((group) => {
      if (group.qtd === acm) {
        classeModal.push(group);
      }
    });

    const modaConvencional = [];

    classeModal.forEach((modal) => {
      const value = ((modal.class.max - modal.class.min) / 2) + modal.class.min;
      modaConvencional.push(value);
    });

    return modaConvencional;
  }
}
