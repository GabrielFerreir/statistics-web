import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {StatisticsService} from '../statistics.service';
import {UiToolbarService} from '../../smn-ui/toolbar/toolbar.service';
import {GraphicService} from '../../components/graphic/graphic.service';
import {Router} from '@angular/router';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

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
    this.toolbarService.activateExtendedToolbar(1280);
    this.toolbarService.set('Dashboard');


    // PIE GRAPHICS
    const canvas = <any>document.getElementById('pie');
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['New', 'In Progress', 'On Hold'],
        datasets: [{
          label: '# of Votes',
          data: [1, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });
    // END PIE GRAPHICS

  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

  nextModa() {
    if (typeof this.dados === 'object') {
      if (this.numModa < this.dados.moda.length - 1) {
        this.numModa++;
      } else {
        this.numModa = 0;
      }
    }
  }

}
