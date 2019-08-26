import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-bar',
  templateUrl: './color-bar.component.html',
  styleUrls: ['./color-bar.component.css']
})
export class ColorBarComponent implements OnInit {
  public owlStyle;
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
    if (this.title) {
      this.owlStyle = {height: '300px'};
    } else {
      this.owlStyle = {height: '110px'};
    }
  }
}
