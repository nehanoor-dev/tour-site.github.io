import { Component } from '@angular/core';
import { BusinessHeaderComponent } from '../business-header/business-header.component';
import { BusinessSolnComponent } from '../business-soln/business-soln.component';
import { SponsersComponent } from '../sponsers/sponsers.component';
import { KeyfiguresComponent } from '../keyfigures/keyfigures.component';
import { ContactBtnComponent } from '../contact-btn/contact-btn.component';
import { AboutComponent } from '../about/about.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { PricingComponent } from '../pricing/pricing.component';
import { DataService } from '../services/data.service';
import { NavbarBusinessComponent } from '../navbar-business/navbar-business.component';
 
@Component({
  selector: 'app-business',
  standalone: true,
  imports: [
    BusinessHeaderComponent,
    BusinessSolnComponent,
    SponsersComponent,
    KeyfiguresComponent,
    ContactBtnComponent,
    AboutComponent,
    ContactFormComponent,
    PricingComponent,
    NavbarBusinessComponent,
  ],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  pricing : any 

  constructor(private dataService : DataService){
    this.pricing = this.dataService.getData().pricing;
    console.log(this.pricing)
  }

}
