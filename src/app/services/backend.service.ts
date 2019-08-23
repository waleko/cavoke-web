import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  private afAuth: AngularFireAuth;
  constructor(private httpClient: HttpClient, afAuth: AngularFireAuth) {
    this.afAuth = afAuth;
  }
  private static makeUrl(method: string) {
    return environment.api_home + method + "/";
  }

  // private async wrapperFunc(auth) {
  //   console.log(3);
  //   const token = await auth.getIdToken();
  //   console.log(token);
  //   return token
  // }

  private getIdToken()
  {
    // const auth = this.afAuth.auth;
    // auth.onAuthStateChanged((user) => {
    //   return user.getIdToken().then((token) => {
    //     console.log(token);
    //     return token;
    //   })
    // });
    // console.error("yikes!");

    // const token = this.afAuth.authState.subscribe(async auth => {
    //   console.log(auth);
    //   const result = await auth.getIdToken();
    //   console.log(result);
    //   return result;
    // });
    // console.log(token);
    // return token;

    // this.afAuth.authState.subscribe(auth => {
    //   console.log(2);
    //   return this.wrapperFunc(auth);
    // });
    // console.log(1);
  }

  private getAuthHeader() {
    const header = new HttpHeaders({Authorization : 'JWT ' });
    console.log(header);
    return header;
  }

  public getTypes() {
    return this.httpClient.get(BackendService.makeUrl('getTypes'), {headers: this.getAuthHeader()});
  }

  public getSessions() {
    return this.httpClient.get(BackendService.makeUrl('getSessions'));
  }

  // private sendAuthRequest(url: string, url_params={})
  // {
  //   // const auth_state = this.afAuth.authState;
  //   // return new Promise(resolve => {
  //   //     auth_state.subscribe(auth => {
  //   //       const promise = auth.getIdToken().then(token =>
  //   //       {
  //   //         const header = new HttpHeaders({Authorization : 'JWT ' + token});
  //   //         resolve(this.httpClient.get(url, {headers: header, params: url_params}));
  //   //       });
  //   //     })
  //   // });
  //   return this.afAuth.authState.toPromise().then(auth => {
  //     console.log(auth);
  //     return auth.getIdToken().then(token => {
  //       console.log(token);
  //       const header = new HttpHeaders({Authorization : 'JWT ' + token});
  //       const result = this.httpClient.get(url, {headers: header, params: url_params});
  //       console.log(result);
  //       return result;
  //     })
  //   })
  // }

  // getTokenHeader() {
  //   // return firebase.auth().currentUser.getIdToken()
  //   //   .then(token => {
  //   //     console.log(token);
  //   //     let tokenHeader = new Headers({
  //   //       'Authorization': token
  //   //     });
  //   //     tokenHeader.append('Content-Type', 'application/json');
  //   //     return tokenHeader;
  //   //   });
  //   console.log(this.afAuth.auth);
  //   console.log(this.afAuth.auth.currentUser);
  //   const token = JSON.parse(JSON.stringify(this.afAuth.auth.currentUser)).stsTokenManager.accessToken;
  //   const header = new HttpHeaders({Authorization : 'JWT ' + token});
  //   return header;
  // }

  private sendAuthRequest(method: string, url_params={})
  {
    const url = BackendService.makeUrl(method);
    let ans;
    this.afAuth.authState.subscribe(auth => {
      console.log(auth);
      // ans = auth.getIdToken().then(token => {
      //       console.log(token);
      //       const header = new HttpHeaders({Authorization : 'JWT ' + token});
      //       const result = this.httpClient.get(url, {headers: header, params: url_params});
      //       console.log(result);
      //       return result;
      //     });
      //   });
      const promise = new Promise(resolve => {
        auth.getIdToken().then(token => {
          console.log(token);
          const header = new HttpHeaders({Authorization: 'JWT ' + token});
          this.httpClient.get(url, {headers: header, params: url_params}).subscribe(data => {resolve(data)});
        });
      });
      console.log('umba');
      console.log(promise);
      ans = promise;
      console.log(promise);
    });
    console.log("kumba");
    console.log(ans);
    return ans;
  }

  public createSession(gameTypeId: string) {
    return this.sendAuthRequest('newSession', {game_type_id: gameTypeId});

    // return this.httpClient.get(BackendService.makeUrl('newSession'), {headers: this.getTokenHeader(), params: {game_type_id: gameTypeId}});
  }
}
