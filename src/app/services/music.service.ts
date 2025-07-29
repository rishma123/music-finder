import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private API_URL = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }
   searchSongs(term: string): Observable<any> {
    return this.http.get(`${this.API_URL}?term=${term}&media=music`);
  }
}
