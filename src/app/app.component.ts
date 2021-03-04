import {Component} from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor() {
    this.products = [
      new Product('nikeSku', 'newReleaseNike', '/assets/images/nike.jpg', [' shoes ', ' nike '], 240000),
      new Product('salomon', 'newBlueJacket', '/assets/images/blueJacket.jpg', [' jackets ', ' salomon '], 148000),
      new Product('newBalance', 'baseballHat', '/assets/images/baseballHat.jpeg', [' hats ', ' newBalance '], 125000),
    ];
  }

  productWasSelected($event){
    console.log($event);
  }
}
