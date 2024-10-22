import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-contact-btn',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './contact-btn.component.html',
  styleUrl: './contact-btn.component.css'
})
export class ContactBtnComponent {
  constructor(private scrollService: ScrollService){}

}
