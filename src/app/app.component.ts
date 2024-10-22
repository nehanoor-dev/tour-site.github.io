import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import jsonData from './../assets/data/data.json';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    HomeComponent,
    RouterModule,
    BusinessComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'my-app';
  data = jsonData; 

  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
