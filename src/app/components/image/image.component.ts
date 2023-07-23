import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input() src: string = '';
  @Input() alt: string = '';

  srcDefault: string = './assets/images/default.png';

  imgError() {
    this.src = this.srcDefault;
  }
}
