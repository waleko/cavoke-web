import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {skipUntil, tap} from 'rxjs/operators';
import {observable, Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  constructor(private httpClient: HttpClient, private afAuth: AngularFireAuth, public router: Router) {
    console.log(this.router);
  }

  public isFailStatus(data) {
    const ok_status: boolean = data['status'] == 'OK';
    if (!ok_status) {
      console.error('Not ok response!');
      console.log(data['message']);
    }
    return !ok_status;
  }

  public handleError(err, router: Router = null) {
    if (router == null) {
      router = this.router;
    }
    console.error(err);
    setTimeout(() => {
      console.log("wow");
      console.log(this);
      console.log(router);
      router.navigateByUrl("/error", { skipLocationChange: true });
    });

  }

  private static makeUrl(method: string) {
    return environment.api_home + method + '/';
  }

  public getTypes() {
    return this.sendAuthRequest('getTypes');
  }

  public getSessions() {
    return this.sendAuthRequest('getSessions');
  }

  public createSession(gameTypeId: string) {
    return this.sendAuthRequest('newSession', {game_type_id: gameTypeId});
  }

  public getSession(gameId: string) {
    return this.sendAuthRequest('getSession', {game_id: gameId});
  }

  public clickUnit(gameId: string, unitClickedId: string) {
    return this.sendAuthRequest('click', {game_id: gameId, unit_clicked: unitClickedId});
  }

  private sendAuthRequest(method: string, url_params = {}) {
    const url = BackendService.makeUrl(method);
    const subject = new Subject<Object>();
    this.afAuth.authState.subscribe(auth => {
      if (auth == null) {
        console.error('No authentication. Please login.');
      } else {
        auth.getIdToken().then(token => {
          const header = new HttpHeaders({Authorization: 'JWT ' + token});
          this.httpClient.get(url, {headers: header, params: url_params}).subscribe(data => {
            subject.next(data);
          }, (err) => {this.handleError(err, this.router)});
        });
      }
    });
    return subject.asObservable();
  }
}
