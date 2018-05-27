import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {CorrelacaoRegressaoService} from '../correlacao-regressao.service';
import {Location} from '@angular/common';
import {UiElement, UiToolbarService} from '../../../smn-ui/smn-ui.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit, AfterViewInit, OnDestroy {
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
    this.calc = this.correlacaoService.calc;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

  onSubmit(form, type, value) {
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

    if (type === 1) {
      this.calc.result = this.correlacaoService.regressao(this.correlacaoService.calc.A, this.correlacaoService.calc.B, value, null);
    } else {
      this.calc.result = this.correlacaoService.regressao(this.correlacaoService.calc.A, this.correlacaoService.calc.B, null, value);
    }
  }

}
