import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../pages/inventario/inventario.component';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {

  private _itens$ = new BehaviorSubject<Item[]>([]);
  constructor(){
    this._itens$.next([    
      { id: 1, name: 'Item 1', price: 100 },
      { id: 2, name: 'Item 2', price: 200 },
      { id: 3, name: 'Item 3', price: 300 },
    ])
  }

  getItems(){
    return this._itens$; // Retorna uma cópia dos itens
  }

  addItem(item: { id: number; name: string; price: number }): void {
    const valor = this._itens$.value;
    valor.push(item)
    this._itens$.next(valor)
    }


  removeItem(id: number): void {

  let valor = this._itens$.value;
  valor = valor.filter(item => item.id !== id);
  this._itens$.next(valor)
  }
}
