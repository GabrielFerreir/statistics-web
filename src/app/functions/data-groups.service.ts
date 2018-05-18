import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataGroupsService {

  response: any;

  NUM_CLASS = 2;

  amplitude: number;
  classe: number;
  intervalClass: number;
  groupValues: any[];

  constructor() { }

  init(content) {
    this.response = JSON.parse(JSON.stringify(content));
    return this;
  }

  orderBy() {
    this.response.content.sort((a, b) => {
      return (parseFloat(a.group) < parseFloat(b.group)) ? -1 : ((parseFloat(a.group) > parseFloat(b.group)) ? 1 : 0);
    });
    return this;
  }

  getAmplitude() {
    const lastItem = this.response.content[this.response.content.length - 1].group;
    const firstItem = this.response.content[0].group;
    this.amplitude = (lastItem - firstItem) + 1; // POR QUE?

    return this;
  }

  getClassNumber() {
    const K = Math.trunc(Math.sqrt(this.response.content.length));
    const classes = [K - 1, K, K + 1];
    this.classe = classes[this.NUM_CLASS];
    return this;
  }

  getIntervalClass() {
    let checker;
    do {
      if (Number.isInteger(this.amplitude / this.classe)) {
        this.intervalClass = this.amplitude / this.classe;
        checker = true;
      } else {
        this.amplitude++;
      }
    } while (!checker);

    this.intervalClass = this.amplitude - this.classe;
  }

  defineLimits() {
    let lastValue = parseFloat(this.response.content[0].group);
    for (let i = 0; i <= this.classe; i++) {

      this.groupValues.push({
        id: i,
        min: lastValue,
        max: lastValue + this.intervalClass
      });

      lastValue = lastValue + this.intervalClass;
    }
  }

  setLimitsInObjects() {
    this.response.content.forEach((obj) => {
      this.groupValues.forEach((group) => {
        if (obj.group >= group.min && obj.group < group.max) {
          obj.class = group;
        }
      });
    });
  }



  runAll() {
    this.orderBy()
      .getAmplitude()
      .getClassNumber()
      .getIntervalClass();

    return this;
  }



  finish() {
    console.log(this);
    console.log(this.response);
    return this.response;
  }



}
