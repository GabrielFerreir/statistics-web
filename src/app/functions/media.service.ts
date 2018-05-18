import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  ponderada(content) {

    const numerador = content.reduce((res, num) => {
      return res + (num.group * num.qtd);
    }, 0);

    const denominador = content.reduce((res, num) => {
      return res + num.qtd;
    }, 0);

    return numerador / denominador;
  }

  continua(info) {
    const acm = info.content.reduce((res, value) => {
      return res + (((value.class.max + value.class.min) / 2) * value.qtd);
    }) ;
    return acm / info.content[info.content.length - 1].fac;
  }

}
