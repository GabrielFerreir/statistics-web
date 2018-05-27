import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrelacaoRegressaoService {

  constructor() { }

  calculate(values) {
    console.log(values);
    console.log('SomatorioXY', this.somatorioXY(values));
    console.log('SomatorioX', this.somatorioX2(values));
    console.log('SomatorioY', this.somatorioY2(values));
  }

  somatorioXY(values) {
    return values.reduce((acm, item) => {
      return acm + item.x * item.y;
    }, 0);
  }

  somatorioX2(values) {
    return values.reduce((acm, item) => {
      return acm + Math.pow(item.x, 2);
    }, 0);
  }

  somatorioY2(values) {
    return values.reduce((acm, item) => {
      return acm + Math.pow(item.y, 2);
    }, 0);
  }

}
