import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimalServiceService } from '../../services/animal-service.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [ FormsModule , NgIf , NgFor],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {

  constructor(private animalServiceBean: AnimalServiceService){}

  ComponentScope_Animal: string = '';
  ComponentScope_AnimalList: string[] = [];
  
  addAnimal(){
    this.animalServiceBean.add(this.ComponentScope_Animal)
  }

  showAnimals(){
    this.ComponentScope_AnimalList = this.animalServiceBean.show();
  }
}
