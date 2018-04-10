import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StatisticsService} from '../statistics.service';
import {UiToolbarService} from 'ng-smn-ui';
import {ChartsService} from '../charts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  charts01;

  dados;

  constructor(private statistics: StatisticsService,
              private charts: ChartsService,
              private toolbarService: UiToolbarService) {
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
