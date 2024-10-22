import { Component } from '@angular/core';
import {  RouterModule,Routes } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private scrollService: ScrollService) {}
}
