import {Injectable} from '@angular/core';

@Injectable()
export class ChartsService {

  constructor() {
  }

  generateCharts(data, title, type, keys) {
    const obj = {
      chartType: type,
      dataTable: [
        ['Group', 'Data']
      ],
      options: {'title': title}
    };

    const dataCharts = this.adjust(data, keys);
    dataCharts.forEach((item) => {
      obj.dataTable.push(item);
    });

    return obj;

  }

  adjust(data, keys) {
    const result = [];
    data.map((item) => {
      const obj = [];
      keys.forEach((key) => {
        if (item[key] !== undefined) {
          obj.push(item[key]);
        } else {
          throw new Error (`${key} não foi encontrada no objeto`);
        }
      });
      result.push(obj);
      return;
    });
    return result;
  }


}
