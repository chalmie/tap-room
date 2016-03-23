import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './task.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="ABV" class="col-sm-8 input-lg" #newABV>
    <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
    <button (click)="addKeg(newName, newBrand, newABV, newPrice)" class="btn-success btn-lg add-button">Add Keg</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName, newBrand, newABV, newPrice: HTMLInputElement){
    console.log(newName.value, newBrand.value, newABV.value, newPrice.value);
    var newKeg: Keg = new Keg(newName.value, newBrand.value, parseInt(newABV.value), parseInt(newPrice.value), -1);
    this.onSubmitNewKeg.emit(newKeg);
    newName.value = "";
    newBrand.value = "";
    newABV.value = "";
    newPrice.value = "";
  }
}
