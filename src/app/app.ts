import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  val : number = 0;
  num : number = 0;

  calculate(num1: number , num2: number): number{
    let val = num1 + num2;
    return val;
  }

  saveData() {
    let sum = this.calculate(5 , 15);
    return sum;
  }

  increase() {
    this.num++;
  }

  decrease() {
    this.num--;
  }
}