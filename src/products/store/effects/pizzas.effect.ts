import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import * as PizzaActions from "../actions/pizzas.actions";
import { of } from "rxjs/Observable/of";
import { map, switchMap, catchError } from "rxjs/operators";
import { PizzasService } from "../../services";

@Injectable()
export class PizzasEffects {
  constructor(private actions$: Actions, private pizzaService: PizzasService) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(PizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService.getPizzas().pipe(
        map(pizzas => new PizzaActions.LoadPizzasSuccess(pizzas)),
        catchError(error => of(new PizzaActions.LoadPizzasFail(error))),
      );
    }),
  );
}
