import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: BackendService) { }
  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        if("type" in params) {
          const game_type_id = params['type'];
          this.service.createSession(game_type_id).subscribe(
            data => {
              if(data['status'] != 'OK') {
                console.error("Not ok response!");
                console.log(data['message']);
                return;
              }
              const game = data['response']['game'];
              const game_id = game.game_session_id;
              window.location.href = '/game?game_id=' + game_id;
            },
            err => {
              console.log(err);
            }
          );
        }
        else {

        }
      });
    this.ngAfterViewInit();
  }
  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  }
}
