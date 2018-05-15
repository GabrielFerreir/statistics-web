import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StatisticsService} from '../statistics.service';
// import {UiToolbarService} from 'ng-smn-ui';
import { UiToolbarService } from '../../smn-ui/toolbar/toolbar.service'
import {ChartsService} from '../charts.service';
import {GraphicService} from '../../components/graphic/graphic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  charts01;

  dados;

  MOCK = {
    legend: ['Visitas', 'Vendas'],
    items: [
      {indice: '09/05', value: [7, 3]},
      {indice: '10/05', value: [3, 3]},
      {indice: '11/05', value: [8, 6]},
      {indice: '12/05', value: [12, 8]},
      {indice: '13/05', value: [2, 1]}
    ]
  };

  constructor(private statistics: StatisticsService,
              private charts: ChartsService,
              private toolbarService: UiToolbarService,
              public graphicService: GraphicService) {
    this.dados = this.statistics.getDados();
    console.log(this.dados);
  }

  ngOnInit() {
    if (this.dados.content) {
      console.log('Gera o grafico');
      this.charts01 = this.charts.generateCharts(this.dados.content, this.dados.title, 'PieChart', ['group', 'percent']);
    }
  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }

}
