import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  dados;

  constructor() {
    this.dados = {
      qualitativaOrdinaria: [
        'Ruim', 'Bom', 'Otimo', 'Bom', 'Regular', 'Otimo', 'Bom', 'Regular', 'Bom', 'Regular',
        'Ruim', 'Bom', 'Otimo', 'Bom', 'Regular', 'Otimo', 'Bom', 'Regular', 'Bom', 'Regular',
        'Ruim', 'Bom', 'Otimo', 'Bom', 'Regular', 'Otimo', 'Bom', 'Regular', 'Bom', 'Regular',
        'Ruim', 'Bom', 'Otimo', 'Bom', 'Regular', 'Otimo', 'Bom', 'Regular', 'Bom', 'Regular'
      ],
      quantitativoDiscreto: [
        2, 0, 4, 1, 2, 3, 2, 3, 1, 0,
        3, 1, 2, 3, 1, 2, 1, 0, 3, 2,
        1, 2, 2, 0, 1, 3, 2, 2, 4, 1
      ]
    };
  }

  ngOnInit() {
    this.countRepeat(this.dados.qualitativaOrdinaria);
  }

  countRepeat(info) {
    const obj = [];
    const func = {
      insere: (group, qtd) => {
        let condicao;
        obj.forEach((el) => {
          if (el.group === group) {
            condicao = true;
          }
        });
        if (!condicao) {
          obj.push({group: group, qtd: qtd});
        }
      }
    };

      for (var i = 0; i < info.length; i++) {
      let repeat = 0;
      for (var j = 0; j < info.length; j++) {
        if (info[i] === info[j]) {
          repeat++;
        }
      }
      func.insere(info[i], repeat);
    }
    console.log(obj);
      this.percent(obj, info.length);
      this.frequencyAmass(obj);
      this.frequencyPercent(obj, info.length);
  }

  percent(obj, total) {
    obj.forEach((el) => {
      el.percent = el.qtd / total;
    });
  }

  frequencyAmass(obj) {
    let acm = 0;
    obj.forEach((el) => {
      acm += el.qtd;
      el.fac = acm;
    });
  }

  frequencyPercent(obj, total) {
    let acm = 0;
    obj.forEach((el) => {
      acm += el.qtd / total;
      el.facP = acm;
    });
  }

}
