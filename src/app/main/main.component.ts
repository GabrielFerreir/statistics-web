import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StatisticsService} from './statistics.service';
import {UiToolbarService} from 'ng-smn-ui';
import {ChartsService} from "./charts.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  dados;
  res;
  res2;
  charts01;

  constructor(private statistics: StatisticsService,
              private charts: ChartsService,
              private toolbarService: UiToolbarService) {
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
    this.res = this.statistics.countRepeat(this.dados.qualitativaOrdinaria);
    this.res2 = this.statistics.countRepeat(this.dados.quantitativoDiscreto);
    this.charts01 = this.charts.generateCharts(this.res, 'Qualitativa Ordinaria', 'PieChart', ['group', 'percent']);
  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }


}
