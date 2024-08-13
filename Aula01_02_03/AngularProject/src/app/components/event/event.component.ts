import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  showMessage: Boolean = true;

  styleClasses = ['small-title', 'green-title', 'border', 'format']

  toggleMessage(): void {
    this.showMessage = !this.showMessage;
  }
}
