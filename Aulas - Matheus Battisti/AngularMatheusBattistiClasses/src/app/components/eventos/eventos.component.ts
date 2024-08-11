import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show: Boolean = false;

  showMessage(): void{
    alert("Hey, you clicked me!")
    this.show = !this.show;
  } 
}
