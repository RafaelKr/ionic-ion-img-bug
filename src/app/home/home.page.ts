import { Component } from '@angular/core';

interface DemoImage {
  src: string;
}

interface DemoItem {
  label: string;
  img?: DemoImage;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: DemoItem[] = [];

  constructor() {
    this.addItem();

    setInterval(() => {
      this.addItem();
    }, 3000);
  }

  private addItem() {
    const index = this.items.push({
      label: `My item #${this.items.length + 1}`,
    });

    setTimeout(() => {
      this.items[index - 1].img = {
        src: `https://dummyimage.com/56x56/3880ff/fff`,
      };
    }, 2000);
  }

}
