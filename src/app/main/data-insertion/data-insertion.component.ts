import {Component, OnInit, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
import {UiToolbarService, UiElement, UiSnackbar} from 'ng-smn-ui/index';
import {Location} from '@angular/common';
import {StatisticsService} from '../statistics.service';
import {Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';


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
      content: [
        {group: 'Azul1', qtd: 1},
        {group: 'Azul2', qtd: 1},
        {group: 'Azul3', qtd: 1},
        {group: 'Azul4', qtd: 1},
        {group: 'Azul5', qtd: 1},
        {group: 'Azul6', qtd: 1},
        {group: 'Azul7', qtd: 1},
        {group: 'Azul8', qtd: 1},
        {group: 'Azul9', qtd: 1},
        {group: 'Azul10', qtd: 1}
      ]
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
    this.initDragDrop();
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
            this.addListenerMulti(chip, 'mousedown touchstart', this.chipDown);
          }
        });
      }
    });
  }

  chipDown(el) {
    if (this.info.ordinal) {
      this.dragDrop.isChipDown = true;
      this.dragDrop.chipSelected = el[1];
      const elTarget = <any>event.target;
      this.dragDrop.offsetX = event['offsetX'] || event['targetTouches'][0].pageX - elTarget.getBoundingClientRect().left;
      this.dragDrop.offsetY = (event['offsetY'] || event['targetTouches'][0].pageY - elTarget.getBoundingClientRect().top);
      el[1].classList.add('selected');
      this.buildShadow();
      // console.log();
      this.dragDrop.value = JSON.parse(JSON.stringify(this.info.content[el[1].getAttribute('data-value')]));
      this.dragDrop.forDelete = el[1].getAttribute('data-value');
      console.log(this.dragDrop);
    }
  }

  chipMove() {
    if (this.dragDrop.isChipDown) {
      this.dragDrop.isMoved = true;
      this.disableScroll();
      const x = event['clientX'] || event['changedTouches'][0]['clientX'];
      const y = event['clientY'] || event['changedTouches'][0]['clientY'];
      const position = {
        x: x - this.dragDrop.offsetX,
        y: y - this.dragDrop.offsetY + this.getScrollY()
      };
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
    let isFindY = false;
    let lineY;
    const chips = this.element.nativeElement.querySelectorAll('.js-chips-dado');
    for (let i = 0; i < chips.length; i++) {
      if (!chips[i].classList.contains('selected')) {

        if (chips[i].getBoundingClientRect().y + chips[i].getBoundingClientRect().height > position.y) {
          if (!isFindY) {
            isFindY = true;
            lineY = chips[i].getBoundingClientRect().y;
          }
        }


        if (chips[i].getBoundingClientRect().x > position.x && chips[i].getBoundingClientRect().y === lineY) {
          if (!isFind) {
            isFind = true;
            before = chips[i];
          }
        }
      }
    }
    if (!isFind) {
      let lastChip;
      chips.forEach((chip, index) => {
        if (chip.getBoundingClientRect().y === lineY) {
          lastChip = index;
        }
      });
      return chips[lastChip + 1];
      /*
        CASO ELE NÂO ENCONTRE UM ELEMENTO MAIOR NA MESMA LINHA
        ELE VAI PEGAR O ULTIMO ELEMENTO DA LINHA MAIS 1
        ASSIM ELE ENCONTRARA O ELEMENTO DA LINHA SEGUINTE
        OU RETORNARA UNDEFINED QUE FARA COM QUE ELE SEJA INSERIDO
        NA ULTIMA POSIÇÃO.
      */
    }

    return before;
  }

  chipUp(el) {
    if (this.dragDrop.isChipDown && this.dragDrop.isMoved) {
      this.dragDrop.isChipDown = false;
      this.dragDrop.chipSelected.classList.remove('selected');
      this.dragDrop.chipSelected.style = '';

      this.info.content.splice(this.dragDrop.shadow.getAttribute('data-value') - 1, 0, this.dragDrop.value);
      this.renderer.insertBefore(this.dragDrop.chipSelected.parentNode, this.dragDrop.chipSelected, this.dragDrop.shadow);
      this.removeSombra();
      this.enableScroll();
      this.dragDrop = {};
      this.initDragDrop();
      console.log(this.info.content);
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
    this.dragDrop.shadow.setAttribute('data-value', before.getAttribute('data-value'));
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

  disableScroll() {
    if (window.addEventListener) { // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    }
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove = this.preventDefault; // mobile
    // document.onkeydown = this.preventDefaultForScrollKeys;
  }

  enableScroll() {
    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    }
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }

  preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }

  getScrollY() {
    return document.querySelector('html').scrollTop;
  }

}
