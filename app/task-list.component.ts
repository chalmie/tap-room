import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './task.model';
import { NewKegComponent } from './new-task.component';
import { KegComponent } from './task.component';
// import { DonePipe } from './done.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  // pipes: [DonePipe],
  directives: [NewKegComponent, KegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <new-keg (onSubmitNewKeg)="createKeg($event)">
  </new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;

  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    this.kegList.push(
      new Keg(newKeg.name, newKeg.brand, newKeg.abv, newKeg.price, this.kegList.length)
    );
  }
  // theKegsLow(){
  //   this.kegsLow = true;
  // }
}
