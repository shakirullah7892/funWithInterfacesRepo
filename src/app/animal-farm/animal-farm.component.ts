import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { Cow } from '../cow';
import { Dog } from '../dog';
import { Horse } from '../horse';
import { Sheep } from '../sheep';
import { IAnimal } from '../ianimal';

@Component({
  selector: 'app-animal-farm',
  templateUrl: './animal-farm.component.html',
  styleUrls: ['./animal-farm.component.css']
})
export class AnimalFarmComponent implements OnInit {
  cat: Cat = new Cat();
  cow: Cow = new Cow();
  dog: Dog = new Dog();
  horse: Horse = new Horse();
  sheep: Sheep = new Sheep();
  animals: Array<Object>;

  constructor() {
    this.animals = [this.cat, this.cow, this.dog, this.horse, this.sheep];
  }

  ngOnInit() {
  }
  selected(value: any) {
    let animal: IAnimal = value;
    console.log(animal.type);
  }
}
