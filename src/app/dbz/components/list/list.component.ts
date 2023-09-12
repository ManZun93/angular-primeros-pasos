import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Input() //decorador Input sirve para recibir propiedades del padre
public characterList: Character[] = [{
  //id: uuid(),
  name: 'Trunks',
  power: 10,
}]

@Output()
public onDelete:EventEmitter<string> = new EventEmitter()

onDeleteCharacter(id?:string):void {

console.log({id})
// this.characterList.splice(index)
if (!id) return;
this.onDelete.emit(id)

}




};



