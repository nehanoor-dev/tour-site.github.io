import { Component } from '@angular/core';
import {  RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar-business',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './navbar-business.component.html',
  styleUrl: './navbar-business.component.css'
})
export class NavbarBusinessComponent {
 showLinks : boolean = false;

toggleLinks(){
  this.showLinks = !this.showLinks;
}

}
