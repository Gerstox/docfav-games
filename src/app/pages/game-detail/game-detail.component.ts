import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GamesService } from '../../services/games.service';
import { Game } from '../../interfaces/game.interface';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  game: any = '';
  gameId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.gameId = params.get('id');
      if (this.gameId) {
        this.gameService.getGameById(this.gameId)
        .subscribe(data => {
          this.game = data;
        });
      }
    });
  }

}
