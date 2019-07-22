import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  constructor(private httpClient: HttpClient) {}
  public static makeUrl(method: string) {
    return environment.api_home + method
  }
  public getTypes() {
    return this.httpClient.get(LibraryService.makeUrl('getTypes'))
  }
}
