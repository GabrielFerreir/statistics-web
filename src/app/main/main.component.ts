import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UiToolbarService} from '../smn-ui/toolbar/toolbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnDestroy {

  constructor(private toolbarService: UiToolbarService) {

  }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(480);
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }


}
