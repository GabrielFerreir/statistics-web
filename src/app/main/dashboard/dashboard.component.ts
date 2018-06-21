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
  COLORS = [
    '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C',  // RED
    '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F',  // PINK
    '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C',  // PURPLE
    '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92',  // DEEP PURPLE
    '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E',  // INDIGO
    '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1',  // BLUE
  ];

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
    if (this.dados.type === 0) {
      const canvas = <any>document.getElementById('pie');
      const ctx = canvas.getContext('2d');

      const labels = this.dados.content.map((label) => {
        return label.group;
      });
      const values = this.dados.content.map((value) => {
        return value.qtd;
      });
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: values,
            backgroundColor: this.COLORS,
            borderWidth: 1
          }]
        },
        options: {
          responsive: false,
          display: true
        }
      });
    }
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


  // IMPLEMENTAR FUNÇÂO PARA GERAR CORES

  // selectColors(length) {
  //   const COLORS = [
  //     '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C',  // RED
  //     '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F',  // PINK
  //     '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C',  // PURPLE
  //     '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92',  // DEEP PURPLE
  //     '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E',  // INDIGO
  //     '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1',  // BLUE
  //   ];
  //   const numbers = [];
  //   for (let i = 0; i < length; i++) {
  //     const randomNumber = Math.floor(Math.random() * length);
  //     if (!i) {
  //       numbers.push(randomNumber);
  //     } else {
  //       let find = false;
  //       numbers.forEach((number) => {
  //         if (number = randomNumber) {
  //           find = true;
  //         }
  //       });
  //       if (!find) {
  //         numbers.push(randomNumber);
  //       }
  //     }
  //   }
  //   return numbers;
  // }

}
