import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
   faqs : any;
   open = false;

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  constructor (private dataService: DataService){
    this.faqs = this.dataService.getData().faqs;
    console.log(this.dataService.getData().faqs)
  }
}
