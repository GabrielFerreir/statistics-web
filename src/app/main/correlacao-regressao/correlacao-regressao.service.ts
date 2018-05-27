import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrelacaoRegressaoService {

  calc: any;

  constructor() {
    this.calc = {};
  }

  calculate(values) {
    console.log(values);
    console.log('SomatorioX', this.somatorioX(values));
    console.log('SomatorioY', this.somatorioY(values));
    console.log('SomatorioXY', this.somatorioXY(values));
    console.log('SomatorioX²', this.somatorioX2(values));
    console.log('SomatorioY²', this.somatorioY2(values));

    const correlacao = this.correlacao(values.length,
      this.somatorioX(values),
      this.somatorioY(values),
      this.somatorioXY(values),
      this.somatorioX2(values),
      this.somatorioY2(values));

    const A = this.regressaoA(values.length,
      this.somatorioXY(values),
      this.somatorioX(values),
      this.somatorioY(values),
      this.somatorioY2(values));

    const B = this.regressaoB(values.length,
      this.somatorioX(values),
      this.somatorioY(values),
      A);

    this.calc.correlacao = correlacao;
    this.calc.nivel = this.nivelCorrelacao(correlacao);
    this.calc.A = A;
    this.calc.B = B;

    console.log(this.regressao(A, B, 20, null));
  }

  somatorioX(values) {
    return values.reduce((acm, item) => {
      return acm + item.x;
    }, 0);
  }

  somatorioY(values) {
    return values.reduce((acm, item) => {
      return acm + item.y;
    }, 0);
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

  correlacao(n, X, Y, XY, X2, Y2) {
    const numerador = (n * XY) - (X * Y);
    console.log('Numerador', numerador);
    const denominador = Math.sqrt((n * X2 - Math.pow(X, 2)) * (n * Y2 - Math.pow(Y, 2)));
    console.log('Denominador', denominador);
    return -numerador / denominador;
  }

  nivelCorrelacao(percent) {
    if (percent >= 0 && percent < 0.3) {
      return 'Inevistente a muito fraca';
    } else if (percent >= 0.3 && percent < 0.6) {
      return 'Muita fraca a média';
    } else {
      return 'Média a forte';
    }
  }

  regressao(a, b, x, y) {
    return x ? a * x + b : (y - b) / a;
  }

  regressaoA(n, XY, X, Y, Y2) {
    const numerador = (n * XY) - (Y * X);
    const denominador = (n * Y2) - (Math.pow(Y, 2));
    return numerador / denominador;
  }

  regressaoB(n, X, Y, A) {
    const _Y = Y / n;
    const _X = (X / n) / 1000; // NÃO ME PERGUNTE O MOTIVO DISSO;
    return _X - A * _Y;
  }

}
