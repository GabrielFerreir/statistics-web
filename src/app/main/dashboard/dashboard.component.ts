import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StatisticsService} from '../statistics.service';
import { UiToolbarService } from '../../smn-ui/toolbar/toolbar.service'
import {GraphicService} from '../../components/graphic/graphic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  dados;

  MOCK;

  constructor(private statistics: StatisticsService,
              private toolbarService: UiToolbarService,
              public graphicService: GraphicService) {
    this.MOCK = {
      legend: ['']
    };
    this.dados = this.statistics.getDados();
  }

  ngOnInit() {
    if (this.dados.content) {
      const graphic = this.dados.content.map((dado) => {
        return {
          indice: this.dados.type !== 3 ? dado.group : dado.class.id,
          value: [dado.qtd]
        };
      });
      this.MOCK.items = graphic;
      this.MOCK.title = this.dados.title;
    }
  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }

}
