import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {GameInfoComponent} from '../game-info/game-info.component';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public gameInfos = [];

  constructor(private service: BackendService) {
    service.getTypes().subscribe(
      data => {
        if (data.status != 'OK') {
          console.error('Not ok response!');
          console.log(data.message);
          return;
        }
        this.gameInfos = data.response.game_types;
        },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
