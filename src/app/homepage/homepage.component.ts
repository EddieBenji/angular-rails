import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `<h1>Hello {{name}}!</h1>`,
})
export class HomepageComponent  { name = 'Angular'; }
