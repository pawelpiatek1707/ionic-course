import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [];

  constructor() {}

  onClick(reason: string, amount: number) {
      this.items.push({
        reason: reason,
        amount: amount
      })
      console.log(this.items)
  }

  onClear() {
    this.items.length = 0;
    console.log(this.items);
  }

}
