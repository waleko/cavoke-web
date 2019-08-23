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
        console.log(params); // FIXME remove
        if("type" in params) {
          console.log("in"); // FIXME remove
          const game_type_id = params['type'];
          console.log(game_type_id);
          const promise = this.service.createSession(game_type_id);
          console.log("bumba");
          console.log(promise);
          promise.then(
            data => {
              console.log("yikes");
              console.log(data);
              if (data['status'] != 'OK') {
                console.error("Not ok response!");
                console.log(data['message']);
                return;
              }
              console.log("ok");
              console.log("data");
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
    // this.ngAfterViewInit();
  }
  // ngAfterViewInit() {
  //   this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
  // }
}
