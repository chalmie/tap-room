import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './task-list.component';
import { Keg } from './task.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg Tracker</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];  // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.kegs = [
      new Keg("Keg1", 'KegBrand1', 10, 6, 0),
      new Keg("Keg2", 'KegBrand2', 4, 4, 1),
      new Keg("Keg3", 'KegBrand3', 4, 7, 2),
      new Keg("Keg4", 'KegBrand4', 8, 5, 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('Parent', clickedKeg);
  }
}
