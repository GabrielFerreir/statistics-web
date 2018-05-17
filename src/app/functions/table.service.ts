import {Injectable} from '@angular/core';
import {UtilsService} from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  response: any;

  constructor(private utils: UtilsService) {
  }

  init(content) {
    this.response = JSON.parse(JSON.stringify(content));
    return this;
  }

  setPercent() {
    const total = this.utils.totalItems(this.response.content, 'qtd');
    this.response.content.forEach((el) => {
      el.percent = el.qtd / total;
    });
    return this;
  }

  // setFrequencyAmass() {
  //   this.response.frequencyAmass = 5;
  //   return this;
  // }
  //
  // setFrequencyPercent() {
  //   this.response.frequencyAmass = 3;
  //   return this;
  // }

  runAll() {
    this.setPercent()
      // .setFrequencyAmass()
      // .setFrequencyPercent();
    return this;
  }

  finish() {
    return this.response;
  }

}
