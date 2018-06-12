import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {UiToolbarService} from '../../smn-ui/toolbar/toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  constructor(private toolbarService: UiToolbarService) { }

  ngAfterViewInit() {
    this.toolbarService.activateExtendedToolbar(840);
    this.toolbarService.set('Home');
  }

  ngOnDestroy() {
    this.toolbarService.deactivateExtendedToolbar();
  }

}
