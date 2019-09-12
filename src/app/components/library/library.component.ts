import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BackendService} from '../../services/backend.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public gameInfos = [];

  constructor(private service: BackendService) {
  }

  ngOnInit() {
    const dynamicScripts = ['/assets/js/main.js'];

    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts [i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    this.service.getTypes().subscribe(
      data => {
        if (this.service.isFailStatus(data))
          return;
        this.gameInfos = data['response'].game_types;
      });
  }
}
