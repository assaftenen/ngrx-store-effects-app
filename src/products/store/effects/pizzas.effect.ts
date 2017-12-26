import { LoadPizzasFail } from "./../actions/pizzas.actions";
import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { switchMap, map, catchError } from "rxjs/operators";
import * as pizzaAction from "../actions/pizzas.actions";
import * as fromService from "../../services";
@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromService.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaAction.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService
        .getPizzas()
        .pipe(
          map(pizzas => new pizzaAction.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzaAction.LoadPizzasFail(error)))
        );
    })
  );
}
