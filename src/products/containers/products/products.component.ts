import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromStore from "../../store";

import { Pizza } from "../../models/pizza.model";

@Component({
  selector: "products",
  styleUrls: ["products.component.scss"],
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((currentPizzas)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (currentPizzas)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  currentPizzas: Pizza[];

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.store
      .select(fromStore.getAllPizzas)
      .subscribe(pizzas => (this.currentPizzas = pizzas));
  }
}
