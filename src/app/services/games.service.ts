import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Game } from '../interfaces/game.interface';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private apiUrl = `${environment.API_URL}/api/`;
  private gameDetailUrl = 'game';
  private gamesUrl = 'games';

  constructor(
    private http: HttpClient
  ) { }

  getGameById(gameId: string) {
    let params = new HttpParams();
    params = params.set('id', gameId);

    return this.http.get<Game[]>(`${this.apiUrl}${this.gameDetailUrl}`,{params});
  }

  getAllGames() {
    return this.http.get<Game[]>(`${this.apiUrl}${this.gamesUrl}`);
  }
  getGamesByPlatform(platform: string) {
    return this.http.get<Game[]>(`${this.apiUrl}${this.gamesUrl}`,
      {
        params: {
          platform
        }
      });
  }
  getGamesByGenre(genre: string) {
    return this.http.get<Game[]>(`${this.apiUrl}${this.gamesUrl}`,
      {
        params: {
          category: genre
        }
      });
  }
  getGamesByName() {

  }
}
