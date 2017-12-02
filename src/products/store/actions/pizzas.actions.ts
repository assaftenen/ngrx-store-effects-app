
import { Pizza } from './../../models/pizza.model';
import { Action } from '@ngrx/store'

// load pizzas
export const LOAD_PIZZAS= '[products] Load Pizzas'
export const LOAD_PIZZAS_FAIL= '[products] Load Pizzas FAIL'
export const LOAD_PIZZAS_SUCCESS= '[products] Load Pizzas SUCCESS'


export class LoadPizzas implements Action{
    readonly type = LOAD_PIZZAS
}

export class LoadPizzasFail implements Action{
    readonly type = LOAD_PIZZAS_FAIL
    constructor (public payload: any){
        
    }
}
    export class loadPizzasSuccess implements Action{
        readonly type = LOAD_PIZZAS_FAIL
        constructor (public payload: Pizza[]){
            
        }
}

export type PizzaActions = LoadPizzas |  LoadPizzasFail | LoadPizzasFail

