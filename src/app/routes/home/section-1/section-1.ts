import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section-1',
  imports: [FormsModule],
  templateUrl: './section-1.html',
  styleUrl: './section-1.css'
})
export class Section1 {
  inputValue: string = '';

  ngOnInit() {
    console.log(this.inputValue);
  }

  onClick() {
    console.log(this.inputValue);
  }
}