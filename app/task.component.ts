import { Component } from 'angular2/core';
import { Keg } from './task.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
    template: `
    <div>
      <label>Name: {{keg.name}} Brand: {{ keg.brand }} ABV: {{ keg.abv }} Price: {{ keg.price }} Pints Remaining: {{ keg.pints }}</label>
      <button (click)="pourPint()" class="btn-success btn-sm add-button">Pour Pint</button>
    </div>
    `
})

export class KegComponent {
  public keg: Keg;
  pourPint() {
    this.keg.pints = this.keg.pints -1;
  }
}
