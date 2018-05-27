import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {UiToolbarService} from '../../smn-ui/smn-ui.module';
import {Location} from '@angular/common';

@Component({
  selector: 'app-distribuicao-uniforme',
  templateUrl: './distribuicao-uniforme.component.html',
  styleUrls: ['./distribuicao-uniforme.component.scss']
})
export class DistribuicaoUniformeComponent implements OnInit, AfterViewInit, OnDestroy {

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
