import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-if-render',
  standalone: true,
  imports: [NgIf],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent {
  canShow: Boolean = true;

}
