import { Component, Input, Output, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-section-2',
  imports: [],
  templateUrl: './section-2.html',
  styleUrl: './section-2.css'
})
export class Section2 {
  name = input<string>();
  age = input<number>(0);
}