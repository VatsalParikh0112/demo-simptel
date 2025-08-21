import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
navigateTo(arg0: string) {
throw new Error('Method not implemented.');
}
  private router = inject(Router);

  public clickEvent(path: string) {
    this.router.navigate([path]);
  }
}