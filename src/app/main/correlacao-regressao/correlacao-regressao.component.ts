import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {UiElement, UiToolbarService} from '../../smn-ui/smn-ui.module';
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

  letters = [
    {id: 1, nome: 'X'},
    {id: 2, nome: 'Y'}
  ];

  calc: any;

  constructor(private element: ElementRef,
              private toolbarService: UiToolbarService,
              public _location: Location,
              private correlacaoService: CorrelacaoRegressaoService,
              private router: Router) {
    this.info = {};
    this.calc = {};
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
    this.toolbarService.activateExtendedToolbar(840);
    this.toolbarService.set('Correlação e Regressão');

  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

  addInfo(form, info) {
    for (const control in form.controls) {
      if (form.controls.hasOwnProperty(control)) {
        form.controls[control].markAsTouched();
        form.controls[control].markAsDirty();
      }
    }
    if (!form.valid) {
      UiElement.focus(this.element.nativeElement.querySelector('form .ng-invalid'));
      return false;
    }

    const inset = JSON.parse(JSON.stringify(info));
    this.list.push(inset);
  }

  removeInfo(index) {
    this.list.splice(index, 1);
  }

  onSubmit(values) {
    this.correlacaoService.calculate(values);
    this.router.navigate(['/correlacao-regressao/response']);
  }


}
