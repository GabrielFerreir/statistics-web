import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  menuOpen;

  constructor(private titleService: Title,
              private toolbarService: UiToolbarService) {

  }

  ngOnInit() {
    this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
  }
}
