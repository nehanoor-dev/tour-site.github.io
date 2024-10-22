import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DetailsComponent } from '../details/details.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { CoverComponent } from '../cover/cover.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { KeyfiguresComponent } from '../keyfigures/keyfigures.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { PreFooterComponent } from '../pre-footer/pre-footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    DetailsComponent,
    CoverComponent,
    ActivitiesComponent,
    TestimonialComponent,
    KeyfiguresComponent,
    FaqsComponent,
    PreFooterComponent,
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
