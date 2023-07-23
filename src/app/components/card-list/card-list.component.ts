import { Component, OnInit } from '@angular/core';

import { Game } from '../../interfaces/game.interface';

import { GamesService } from '../../services/games.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  games: Game[] = [];
  gameName = '';

  selectedCategory = '';
  selectedPlatform = '';
  selectedName = '';

  constructor(
    private gamesService: GamesService
  ) {
    this.gamesService.getAllGames()
    .subscribe(data => {
      this.games = data;
    })
  }

  ngOnInit(): void {
    this.gamesService.gamesFiltered$
    .subscribe(data => {
      this.games = data;
      this.getByName(this.gameName);
    });
  }

  getByName(name: string) {
    this.gameName = name;
    if (name === '' || name.length < 3) return;
    this.games = this.games.filter(game => game.title.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }

}
