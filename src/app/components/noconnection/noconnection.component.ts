import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-noconnection',
  templateUrl: './noconnection.component.html',
  styleUrls: ['./noconnection.component.css']
})
export class NoconnectionComponent implements OnInit {

  constructor() {}

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
  }

}
