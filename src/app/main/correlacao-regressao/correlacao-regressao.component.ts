import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {UiToolbarService} from '../../smn-ui/smn-ui.module';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {StatisticsService} from '../statistics.service';
import {CorrelacaoRegressaoService} from './correlacao-regressao.service';

@Component({
  selector: 'app-correlacao-regressao',
  templateUrl: './correlacao-regressao.component.html',
  styleUrls: ['./correlacao-regressao.component.scss']
})
export class CorrelacaoRegressaoComponent implements OnInit, AfterViewInit, OnDestroy {

  info: any;
  list: any;
  constructor(private element: ElementRef,
              private toolbarService: UiToolbarService,
              public _location: Location,
              private correlacaoService: CorrelacaoRegressaoService) {
    this.info = {};
    this.list = [
      {x: 300000, y: 10},
      {x: 400000, y: 8},
      {x: 320000, y: 9},
      {x: 450000, y: 6},
    ];
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

  addInfo(info) {
    const inset = JSON.parse(JSON.stringify(info));
    this.list.push(inset);
  }

  onSubmit(values) {
    this.correlacaoService.calculate(values);
  }


}
