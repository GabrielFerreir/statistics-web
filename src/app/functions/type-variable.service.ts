import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeVariableService {

  MAX_VALUE_FOR_DISCRETA = 10;
  type: number;

  constructor() {
  }

  /*
    2 | Continua
    1 | Discreta
    0 | Quali
   */
  identify(content, ordinal?) {
    let isQuantitativa = null;
    let error;

    content.forEach((dado) => {
      if (isQuantitativa === null) {
        isQuantitativa = !isNaN(dado.group);
      } else {
        if (isQuantitativa !== !isNaN(dado.group)) {
          error = true;
        }
      }
    });

    if (error) {
      console.error('Não conseguimos identificar se a variavel é quanti ou quali');
      return this;
    }

    if (isQuantitativa) {
      const res = content.length > this.MAX_VALUE_FOR_DISCRETA ? 2 : 1;
      this.type = res;
      return this;
    } else {
      this.type = 0;
      return this;
    }
  }

  callFunction() {
    switch (this.type) {
      case 0:
        this.qualitativa();
        break;
      case 1:
        this.discreta();
        break;
      case 2:
        this.continua();
        break;
      default:
        console.error('Tipo invalido');
    }
  }

  qualitativa() {
    console.log('QUALITATIVA');
  }

  discreta() {
    console.log('DISCRETA');
  }

  continua() {
    console.log('CONTINUA');
  }

  run(info) {
    this.identify(info.content)
      .callFunction();
  }

}
