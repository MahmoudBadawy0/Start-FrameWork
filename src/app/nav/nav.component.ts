import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  scroll: boolean = false;

  @HostListener('window:scroll') onScrollEvent() {
    if (scrollY > 0) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }
}
