import { LowerCasePipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  standalone: true,
  imports: [NgClass , UpperCasePipe , LowerCasePipe],
  templateUrl: './pipe-operator.component.html',
  styleUrl: './pipe-operator.component.css'
})
export class PipeOperatorComponent {
  subtitle = 'Este não é o título!'

  styleClasses=['small-title','title','border','format']
}
