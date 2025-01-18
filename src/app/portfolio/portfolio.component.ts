import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  getImage(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const imgElement = target.querySelector('img') as HTMLImageElement;
    if (imgElement) {
      const imgSrc = imgElement.src;
      const modalImage = document.querySelector(
        '#exampleModal img'
      ) as HTMLImageElement;
      if (modalImage) {
        modalImage.src = imgSrc;
      }
    }
  }
}
