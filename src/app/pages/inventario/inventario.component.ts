import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent {
  items: Item[] = [];
  newItem: Item = { id: 0, name: '', price: 0 };
  isEditing: boolean = false;
  editingItemId: number | null = null;

  addItem() {
    if (this.newItem.name && this.newItem.price > 0) {
      if (this.isEditing && this.editingItemId !== null) {
        // Atualizar item existente
        const index = this.items.findIndex(item => item.id === this.editingItemId);
        if (index !== -1) {
          this.items[index] = { ...this.newItem, id: this.editingItemId };
        }
        this.resetForm();
      } else {
        // Adicionar novo item
        this.newItem.id = new Date().getTime();
        this.items.push({ ...this.newItem });
        this.resetForm();
      }
    }
  }

  editItem(item: Item) {
    this.newItem = { ...item };
    this.isEditing = true;
    this.editingItemId = item.id;
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  resetForm() {
    this.newItem = { id: 0, name: '', price: 0 };
    this.isEditing = false;
    this.editingItemId = null;
  }
}
