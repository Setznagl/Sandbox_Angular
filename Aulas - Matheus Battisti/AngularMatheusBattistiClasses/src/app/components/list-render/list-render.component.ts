import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  constructor(private listservice: ListService){}

  animals: Animal[] = [

    {name: "Medeia" , type: "Cat" , age: 10},
    {name: "Bob" , type: "Dog" , age: 5},
    {name: "Dakota" , type: "Cat" , age: 3}
  ]

}
