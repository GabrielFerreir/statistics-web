import {Injectable} from '@angular/core';
import {TableService} from './table.service';
import {StatisticsService} from '../main/statistics.service';
import {DesvioPadraoService} from './desvio-padrao.service';

@Injectable({
  providedIn: 'root'
})
export class TypeVariableService {

  MAX_VALUE_FOR_DISCRETA = 10;
  type: number;
  response: any;

  constructor(
    private statisticsService: StatisticsService,
    private tableService: TableService,
    private desvioPadraoService: DesvioPadraoService) {
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
        this.response = null;
    }
    return this;
  }

  qualitativa() {
    const content = this.tableService.init(this.response)
      .runAll()
      .finish();
    console.log(content);
    console.log('QUALITATIVA');

    const response = {
      title: this.response.title,
      content: content
    };
    this.response = response;
    return this;
  }

  discreta() {
    console.log('DISCRETA');
    const content = this.tableService.init(this.response)
      .runAll()
      .finish();

    const desvioPadrao = this.desvioPadraoService.init(this.response).finish();

    const response = {
      title: this.response.title,
      content: content,
      DPR: desvioPadrao
    };
    this.response = response;
    return this;

  }

  continua() {
    console.log('CONTINUA');
  }

  setInService() {
    console.log(this.response);
    this.statisticsService.set(this.response);
  }

  run(info) {
    this.response = JSON.parse(JSON.stringify(info));
    this.identify(this.response.content)
      .callFunction()
      .setInService();
  }

}
