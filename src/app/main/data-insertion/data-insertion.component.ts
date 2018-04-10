import {Component, OnInit, ElementRef, AfterViewInit} from '@angular/core';
import {UiToolbarService, UiElement, UiSnackbar} from 'ng-smn-ui/index';
import {Location} from '@angular/common';
import {StatisticsService} from '../statistics.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-data-insertion',
  templateUrl: './data-insertion.component.html',
  styleUrls: ['./data-insertion.component.scss']
})
export class DataInsertionComponent implements OnInit, AfterViewInit {

  info: any;
  selectSufixo: any[];
  isChipDown = false;


  constructor(private element: ElementRef,
              private statisticsService: StatisticsService,
              private router: Router,
              private toolbarService: UiToolbarService) {
    this.info = {
      content: []
    };

    this.selectSufixo = [
      {id: 1, nome: 'Sem sufixo'},
      {id: 2, nome: 'Metro'},
      {id: 3, nome: 'Kg'},
      {id: 4, nome: 'Centimetros'}
    ];

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);

    this.addListenerMulti(document, 'mousemove touchmove', this.chipMove);
    this.addListenerMulti(document, 'mouseup touchend', this.chipUp);
  }

  insertData() {
    if (this.info.currentDado && this.info.currentDado.length) {
      const dataTratada = this.info.currentDado.trim().toLowerCase();

      let isExists = false;
      this.info.content.forEach((dado) => {
        if (dado.group === dataTratada) {
          dado.qtd++;
          isExists = true;
        }
      });

      if (!isExists) {
        const obj = {
          group: dataTratada,
          qtd: 1
        };
        this.info.content.push(obj);
        console.log(this.info.content);
      }
      this.info.currentDado = null;
    }
    this.initDragDrop();
  }

  removeData(index) {
    if (this.info.content[index].qtd > 1) {
      this.info.content[index].qtd--;
      return;
    }
    this.info.content.splice(index, 1);
  }

  onSubmit(form, info) {
    console.log(info);
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


  /* DRAG-DROP */
  initDragDrop() {
    const self = this;
    let chips: any;
    const timeOut = () => {
      return () => new Promise(resolve => setTimeout(() => {
        const introChips = self.element.nativeElement.querySelectorAll('.js-chips-dado');
        resolve(introChips);
      }));
    };


    timeOut()().then((data) => {
      chips = data;
      if (chips.length) {
        chips.forEach((chip) => {
          if (!chip.getAttribute('eventActive')) {
            chip.setAttribute('eventActive', 'true');
            this.addListenerMulti(chip, 'mousedown touchdown', this.chipDown);
          }
        });
      }
    });
  }

  chipDown() {
    console.log('DOWN');
    this.isChipDown = true;
  }

  chipMove() {
    if (this.isChipDown) {
      console.log('MOVE');
    }
  }

  chipUp() {
    this.isChipDown = false;
    console.log(this.isChipDown);
  }

  addListenerMulti(element, eventNames, listener) {
    const self = this;
    const events = eventNames.split(' ');
    for (let i = 0; i < events.length; i++) {
      element.addEventListener(events[i], listener.bind(self), false);
    }
  }


}
