import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

public name: string = 'ironman';
public age: number = 45;

get capitalizedName():string { //esto es un getter
  return this.name.toUpperCase();
}

getHeroDescription():string {//esto es un metodo
  return `${this.name} - ${this.age}`
}

/* changeHero(newName:string) : void{
this.name = newName;
}

changeAge(newAge: number):void{
  this.age = newAge;
} */


changeHero() : void{
  this.name = 'Spiderman';
}

changeAge():void{
  this.age = 25;
}

resetForm():void {
  this.name = 'ironman';
  this.age = 45;
}

}
