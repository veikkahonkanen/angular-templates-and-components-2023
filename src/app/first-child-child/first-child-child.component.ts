import { Component } from '@angular/core';
import { BoldNBlueDirective } from '../bold-nblue.directive';

@Component({
  selector: 'app-first-child-child',
  standalone: true,
  imports: [
    BoldNBlueDirective
  ],
  templateUrl: './first-child-child.component.html',
  styleUrl: './first-child-child.component.css'
})
export class FirstChildChildComponent {

}
