import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StatisticsService} from '../statistics.service';
import { UiToolbarService } from '../../smn-ui/toolbar/toolbar.service'
import {GraphicService} from '../../components/graphic/graphic.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  dados;
  graphic: any;
  numModa = 0;

  constructor(private statistics: StatisticsService,
              private toolbarService: UiToolbarService,
              public graphicService: GraphicService,
              public router: Router) {
    this.dados = this.statistics.getDados();
  }

  ngOnInit() {
    if (this.dados.content) {
      this.graphic = this.dados.content.map((dado) => {
        return {
          indice: this.dados.type !== 3 ? dado.group : dado.class.id,
          value: [dado.qtd]
        };
      });
    } else {
      this.router.navigate(['/insert']);
    }
  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }

  nextModa() {
    if (this.numModa < this.dados.moda.length - 1) {
      this.numModa++;
    } else {
      this.numModa = 0;
    }
  }

}
