import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  ponderada(info) {

    const numerador = info.reduce((res, num) => {
      return res + (num.group * num.qtd);
    }, 0);

    const denominador = info.reduce((res, num) => {
      return res + num.qtd;
    }, 0);

    return numerador / denominador;
  }

}
