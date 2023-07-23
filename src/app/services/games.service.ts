import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private gameCategories = ['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'];
  private gamePlatforms = ['pc', 'browser', 'all'];
  private params:any = {};
  private gamesFiltered = new BehaviorSubject<Game[]>([]);

  gamesFiltered$ = this.gamesFiltered.asObservable();

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
  getAllCategories() {
    return this.gameCategories;
  }
  getAllPlatforms() {
    return this.gamePlatforms;
  }

  getParams() {
    return this.params;
  }
  setParams(paramsObject: any) {
    this.params = paramsObject;
    this.http.get<Game[]>(`${this.apiUrl}${this.gamesUrl}`, {
      params:
      this.params
    })
    .subscribe(data => {
      this.gamesFiltered.next(data);
    });
  }
}
