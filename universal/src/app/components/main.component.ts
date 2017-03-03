import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html'
})
export class MainComponent {

  private title = 'Universal app works!';
  private data;

  constructor(private route: ActivatedRoute) {
    this.title = 'Loading app...';
    console.log('loading app');
    this.route.data.subscribe(
      (resolve) => {
        this.title = 'Universal app loaded!';
        this.data = resolve;
        console.log('app loaded');
      }
    );
  }

}
