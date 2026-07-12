import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
//import { WOW } from 'wowjs';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the global pool once
    library.addIcons(faCoffee);
  }
  protected readonly title = signal('SunRay');

  ngAfterViewInit() {
    /* Initialize WOW.js
    const wow = new WOW({
      live: false, // Prevents issues with Angular's dynamic DOM updates
    });
    wow.init();
    */
  }
}
