import { inject, Component, input  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button1',
  imports: [],
  templateUrl: './button1.html',
  styleUrl: './button1.css'
})
export class Button1 {

  label = input<string>('');
  private router = inject(Router);

  redirect() {
    this.router.navigate(['/']);
  }
}