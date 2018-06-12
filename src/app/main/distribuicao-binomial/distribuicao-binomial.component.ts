import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {UiElement, UiToolbarService} from '../../smn-ui/smn-ui.module';
import {Location} from '@angular/common';
import {DistribuicaoBinomialService} from './distribuicao-binomial.service';

@Component({
  selector: 'app-distribuicao-binomial',
  templateUrl: './distribuicao-binomial.component.html',
  styleUrls: ['./distribuicao-binomial.component.scss']
})
export class DistribuicaoBinomialComponent implements OnInit, AfterViewInit, OnDestroy {

  info: any;
  response: any;

  constructor(private element: ElementRef,
              private toolbarService: UiToolbarService,
              public _location: Location,
              private binomialService: DistribuicaoBinomialService) {
    this.info = {};
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

 onSubmit(form, values) {

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

     this.response = this.binomialService.calculate(values.totalProb,values.totalSucess, values.probSucess, values.probFracasso,values.pelomenos, values.maximo);
  }

}
