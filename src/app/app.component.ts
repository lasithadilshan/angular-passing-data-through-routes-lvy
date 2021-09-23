import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  constructor(private router: Router) { }

  navigate() {
    // this.router.navigate(['other']);
    this.router.navigate(['other'], {
      state: { example: 'data',video : "worldgyan" }
    });
  }
}
