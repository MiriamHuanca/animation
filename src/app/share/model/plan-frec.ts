
export class PlanFrec {
  title_gral: String;
  frec: Frecuencia[];

  constructor(title_gral: String, frec: Frecuencia[]) {
    this.title_gral = title_gral;
    this.frec = frec;
  }
}

export class Frecuencia {
  title: String;
  content: String;
  price: any;
  title_icon: String;
  price_icon: any;
  items: Item[];


  constructor(title: String, content: String, price: any, title_icon: String, price_icon: any, items: Item[]) {
    this.title = title;
    this.content = content;
    this.price = price;
    this.title_icon = title_icon;
    this.price_icon = price_icon;
    this.items = items;
  }
}

export class Item {
  check: any;
  text: String;
}
