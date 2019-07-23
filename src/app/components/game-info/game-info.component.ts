import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  @Input() type_id: string;
  @Input() creator_name: string;
  @Input() description: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
