import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {UiToolbarService, UiElement, UiSnackbar} from 'ng-smn-ui/index';
import {Location} from '@angular/common';
import { StatisticsService } from '../statistics.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-insertion',
  templateUrl: './data-insertion.component.html',
  styleUrls: ['./data-insertion.component.scss']
})
export class DataInsertionComponent implements OnInit, AfterViewInit {

  info: any;
  selectSufixo: any[];


  constructor(private element: ElementRef,
              private statisticsService: StatisticsService,
              private router: Router,
              private toolbarService: UiToolbarService) {
    this.info = {
      dados: []
    };

    this.selectSufixo = [
      { id: 1, nome: 'Sem sufixo' },
      { id: 2, nome: 'Metro' },
      { id: 3, nome: 'Kg' },
      { id: 4, nome: 'Centimetros' }
    ];

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }

  insertData() {
    
    if (this.info.currentDado && this.info.currentDado.length) {
      const dataTratada = this.info.currentDado.trim().toLowerCase();
      let isExists = false;
      this.info.dados.forEach((dado) => {
        if (dado.group === dataTratada) {
          dado.qtd++;
          isExists = true;
        }
      });
      if (!isExists) {
        const obj = {
          group: dataTratada,
          qtd: 1
        }
        this.info.dados.push(obj);
      }
      this.info.currentDado = null;
    }
  }

  removeData(index) {
    if(this.info.dados[index].qtd > 1) {
      this.info.dados[index].qtd--;
      return;
    }
      this.info.dados.splice(index, 1);
    }

  onSubmit(form, info) {
    console.log(info)
    // console.log(form);
    // this.saving = true;
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
    this.statisticsService.identifyTypeVariable(this.info);
    this.router.navigate(['/dashboard']);
  }

  



}
