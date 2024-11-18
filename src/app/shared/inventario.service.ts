import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  private items: { id: number; name: string; price: number }[] = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
    { id: 3, name: 'Item 3', price: 300 },
  ];

  getItems(): { id: number; name: string; price: number }[] {
    return [...this.items]; // Retorna uma cópia dos itens
  }

  addItem(item: { id: number; name: string; price: number }): void {
    this.items.push(item);
  }

  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
