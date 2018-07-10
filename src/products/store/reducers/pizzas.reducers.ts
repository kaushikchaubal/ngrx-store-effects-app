import { Pizza } from "../../models/pizza.model";
import * as fromPizzas from "../actions/pizzas.actions";

export interface PizzaState {
  data: Pizza[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: PizzaState = {
  data: [],
  loading: false,
  loaded: false,
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction,
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}
