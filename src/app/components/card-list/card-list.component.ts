import { Component, OnInit } from '@angular/core';

import { Game } from '../../interfaces/game.interface';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  games: Game[] = [];

  constructor(
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.gamesService.getAllGames()
    .subscribe(data => {
      this.games = data;
    })
  }

  getByPlatform() {
    this.gamesService.getGamesByPlatform('pc')
    .subscribe(data => {
      this.games = data;
    })
  }

  getByGenre() {
    this.gamesService.getGamesByGenre('shooter')
    .subscribe(data => {
      this.games = data;
    })
  }

}
