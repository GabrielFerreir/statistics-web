import {Component, OnInit, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
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
  // isChipDown = false;

  dragDrop: any;


  constructor(private element: ElementRef,
              private statisticsService: StatisticsService,
              private router: Router,
              private toolbarService: UiToolbarService,
              private renderer: Renderer2) {
    this.info = {
      content: []
    };
    this.dragDrop = {};

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

  chipDown(el) {
    console.log('DOWN');
    this.dragDrop.isChipDown = true;
    this.dragDrop.chipSelected = el[1];
    this.dragDrop.offsetX = event['offsetX'];
    this.dragDrop.offsetY = event['offsetY'];
    // const el = event.target
    // event.target.classList.add('ui-chip');
    console.log(event);
    el[1].classList.add('selected');
    this.buildShadow();
  }

  chipMove() {
    if (this.dragDrop.isChipDown) {
      const position = {x: event['clientX'] - this.dragDrop.offsetX, y: event['clientY'] - this.dragDrop.offsetY};
      const before = this.identifyLocalDrop(position);
      this.moveShadow(before);
      this.dragDrop.chipSelected.style.position = 'fixed';
      this.dragDrop.chipSelected.style.top = `${position.y}px`;
      this.dragDrop.chipSelected.style.left = `${position.x}px`;
      this.dragDrop.sombra = false;
    }
  }

  identifyLocalDrop(position) {
    let before;
    let isFind = false;
    const chips = this.element.nativeElement.querySelectorAll('.js-chips-dado');
    for (let i = 0; i < chips.length; i++) {
      if (!chips[i].classList.contains('selected')) {
        if (chips[i].getBoundingClientRect().x > position.x) {
          if (!isFind) {
            isFind = true;
            before = chips[i];
          }
        }
      }
    }
    return before;
  }

  chipUp(el) {
    if (this.dragDrop.isChipDown) {
      this.dragDrop.isChipDown = false;
      // console.log(this.dragDrop.isChipDown);
      this.dragDrop.chipSelected.classList.remove('selected');
      // this.dragDrop.sombra = false;
      this.dragDrop.chipSelected.style = '';
      this.renderer.insertBefore(this.dragDrop.chipSelected.parentNode, this.dragDrop.chipSelected, this.dragDrop.shadow);
      this.removeSombra();
    }
  }

  addListenerMulti(el, eventNames, listener) {
    const self = this;
    const events = eventNames.split(' ');
    for (let i = 0; i < events.length; i++) {
      el.addEventListener(events[i], listener.bind(self, [this, el]), false);
    }
  }

  buildShadow() {
    const configSombra = {
      width: this.dragDrop.chipSelected.offsetWidth,
      height: this.dragDrop.chipSelected.offsetHeight
    };
    const shadow = this.renderer.createElement('div');
    shadow.classList.add('ui-chip', 'js-dragdrop-shadow');
    shadow.style.width = `${configSombra.width}px`;
    shadow.style.height = `${configSombra.height}px`;
    this.dragDrop.shadow = shadow;
  }

  moveShadow(before) {
      this.renderer.insertBefore(this.dragDrop.chipSelected.parentNode, this.dragDrop.shadow, before);
  }

  removeSombra() {
    const container = this.element.nativeElement.querySelector('.container-chips');
    let shadow;
    if (container) {
      shadow = container.querySelector('.js-dragdrop-shadow');
    }
    if (shadow) {
      container.removeChild(shadow);
    }
  }


}
