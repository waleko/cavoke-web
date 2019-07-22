import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {LibraryService} from './library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public game_infos;

  constructor(private service: LibraryService) {
    let types = service.getTypes();
    console.log(types)
  }

  ngOnInit() {
  }

}
