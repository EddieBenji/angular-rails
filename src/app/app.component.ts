import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html',
  styles: [ `
    .show-inline {
      display: inline-block;
    }
  ` ]
})

export class AppComponent {
  title: 'Freelance Bootcamp Dashboard';
}
