import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid'; //para asignar ids


import { Character } from '../interfaces/character.interface';


@Injectable({ //este decorador define a este archivo como un servicio
  providedIn: 'root'
})

export class DbzService {

  public characters:Character[] = [{
  id: uuid(),
  name: 'Krillin',
  power: 1000,
},{
  id: uuid(),
  name: 'Goku',
  power: 9500,
},
{
  id: uuid(),
  name: 'Vegeta',
  power: 7500,
}];

addCharacter(character:Character):void { //este metodo nos sirve para recibir el evento que viene desde add-character
  const newCharacter: Character  = {id:uuid(), ...character}; //...character toma todas las propiedades del objeto y las inserta en el objeto

  this.characters.push(newCharacter)
}

// onDeleteCharacter(index:number):void {
//   console.log({index})
//   this.characters.splice(index, 1)
// }

deleteCharacterByid(id:string){
  this.characters = this.characters.filter(character => character.id !== id)
}

  constructor() { }

}
