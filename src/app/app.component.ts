import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {UiToolbarService} from './smn-ui/smn-ui.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuOpen;
  title: string;

  constructor(private titleService: Title,
              private toolbarService: UiToolbarService) {

  }

  ngOnInit() {
    this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
    this.toolbarService.change.subscribe(title => {
      this.title = title;
    });
  }

}


