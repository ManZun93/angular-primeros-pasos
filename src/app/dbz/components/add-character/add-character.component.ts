import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() //decorador para emitir eventos al padre(Main-Page)
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //EventEmitter es un generico <> para emitir eventos

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0,
  };

  emitCharacter():void {
    console.log(this.character);

    if(this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character); //aqui utilizamos nuestro emisor y le damos salida al evento

    this.character = {name:'', power: 0, id:uuid()};
  };




}
