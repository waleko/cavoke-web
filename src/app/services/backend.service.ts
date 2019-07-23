import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private afAuth: AngularFireAuth;
  constructor(private httpClient: HttpClient, afAuth: AngularFireAuth) {
    this.afAuth = afAuth;}
  private static makeUrl(method: string) {
    return environment.api_home + method
  }
  private getAuthHeader() {
    return new HttpHeaders({'Authorization':'JWT ' + this.afAuth.idToken});
  }
  public getTypes() {
    return this.httpClient.get(BackendService.makeUrl('getTypes'), {headers: this.getAuthHeader()})
  }
  public getSessions() {
    return this.httpClient.get(BackendService.makeUrl('getSessions'))
  }
  public createSession(game_type_id: string) {
    return this.httpClient.get(BackendService.makeUrl('newSession'),
      {headers: this.getAuthHeader(), params: {'game_type_id': game_type_id}})
  }
}
