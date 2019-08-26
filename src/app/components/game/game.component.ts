import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../services/backend.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;
  private gameId: string;
  private game_data: Object;
  private canvas_data: Object;

  constructor(private route: ActivatedRoute, private service: BackendService) {
  }

  updateCanvas(data: Object) {

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if ('type' in params) {
          // create new session and redirect
          const game_type_id = params['type'];
          const observable = this.service.createSession(game_type_id);
          observable.subscribe(response => {
            if (this.service.isFailStatus(response)) {
              return;
            }
            const game = response['response']['game'];
            const game_id = game.game_session_id;
            window.location.href = '/game?game_id=' + game_id;
          }, this.service.handleError);
        } else if ('game_id' in params) {
          this.gameId = params['game_id'];
          this.service.getSession(this.gameId).subscribe(response => {
            if (this.service.isFailStatus(response)) {
              return;
            }
            this.canvas_data = response['response']['data'];
            this.game_data = response['response']['game'];
          }, this.service.handleError);
        } else {
          console.error('Bad request!');
        }
      });
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.updateCanvas(this.canvas_data);
  }
}
