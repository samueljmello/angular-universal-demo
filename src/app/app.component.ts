import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '../../public/css/styles.css';
@Component({
  selector: 'universal-angular-demo',
  template: `<router-outlet><md-spinner *ngIf="loading"></md-spinner></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loading: boolean = false;

  constructor(private router: Router) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigateByUrl('/demo');
    }, 3000);
  };

}
