import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { CursosServiceService } from '../../services/cursos-service.service';

@Component({
  selector: 'app-cursos-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cursos-component.component.html',
  styleUrl: './cursos-component.component.css'
})
export class CursosComponentComponent {


  cursos: string[] = [];

}
