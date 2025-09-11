import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  navigateTo() {
    throw new Error('Method not implemented.');
  }

  constructor ( private router: Router ) {}

  public clickEvent(path: string) {
    this.router.navigate([path]);
  }
}