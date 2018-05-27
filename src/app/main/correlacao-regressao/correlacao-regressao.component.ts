import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {UiToolbarService} from '../../smn-ui/smn-ui.module';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {StatisticsService} from '../statistics.service';

@Component({
  selector: 'app-correlacao-regressao',
  templateUrl: './correlacao-regressao.component.html',
  styleUrls: ['./correlacao-regressao.component.scss']
})
export class CorrelacaoRegressaoComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private element: ElementRef,
              private toolbarService: UiToolbarService,
              public _location: Location) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }


}
