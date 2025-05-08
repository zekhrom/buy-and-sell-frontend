import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListingsPageComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'buy-and-sell-frontend';
}
