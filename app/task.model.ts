

export class Keg {
  public pints: number = 13;
  public kegsLow: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public id: number) {

  }
}
