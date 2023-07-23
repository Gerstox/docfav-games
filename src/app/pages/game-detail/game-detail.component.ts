import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common'

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
    private gameService: GamesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.gameId = params.get('id');
        if (this.gameId) {
          return this.gameService.getGameById(this.gameId)
        }
        return '';
        }
      )
    )
    .subscribe((data) => {
      this.game = data;
    });
  }

  back(): void {
    this.location.back()
  }

}
