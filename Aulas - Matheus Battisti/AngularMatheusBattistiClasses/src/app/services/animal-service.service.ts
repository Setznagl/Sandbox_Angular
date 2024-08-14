import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalServiceService {
  ServiceScope_AnimalList = ['Cachorro' , 'Gato']

  constructor() { }

  add(animal :string){
    this.ServiceScope_AnimalList.push(animal)
  }

  show(){
    return this.ServiceScope_AnimalList;
  }
}
