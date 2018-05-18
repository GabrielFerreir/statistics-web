import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() {
  }

  totalItems(array, property) {
    let total = 0;
    array.forEach((obj) => {
      total += obj[property];
    });

    return total;
  }

  listingItens(content) {
    const arrayData = [];
    content.forEach((num, index) => {
      for (let i = 0; i < num.qtd; i++) {
        arrayData.push(num);
      }
    });
    return arrayData;
  }
}
