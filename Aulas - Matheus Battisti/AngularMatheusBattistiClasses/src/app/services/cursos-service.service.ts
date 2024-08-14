import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  getCursos(){
    return ['Angular2' , 'Java']
  }

}
