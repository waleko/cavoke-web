import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BackendService} from '../../services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public gameInfos = [];

  constructor(private service: BackendService, router: Router) {
  }

  ngOnInit() {
    this.service.getTypes().subscribe(
      data => {
        if (this.service.isFailStatus(data))
          return;
        this.gameInfos = data['response'].game_types;
      });
  }
}
