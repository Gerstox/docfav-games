import { Component, Output, EventEmitter } from '@angular/core';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Output() selectedCategory = new EventEmitter<string>();
  @Output() selectedPlatform = new EventEmitter<string>();
  @Output() selectedName = new EventEmitter<string>();

  categories: string[] = [];
  platforms: string[] = [];

  constructor(
    private gamesService: GamesService,
  ) {
    this.categories = this.gamesService.getAllCategories().sort();
    this.platforms = this.gamesService.getAllPlatforms().sort();
  }

  selectParam(value: string, param: string) {
    //this.selectedPlatform.emit(platform);
    let params: any = {
      ...this.gamesService.getParams()
    };
    if(value !== '') {
      params[param] = value;
    } else {
      delete params[param];
    }
    this.gamesService.setParams(params);
  }

  selectCategory(category: string) {
    this.selectedCategory.emit(category);
  }

  onKeyUpName(name: string) {
    this.selectedName.emit(name);
  }

  onSelectCategory(event: any): void {
    // Issue dublicate
    let category = event.target.value;
    let find = this.categories.find(x => x === category);
    if (find) {
      this.selectParam(find, 'category')
    }
  }

}
