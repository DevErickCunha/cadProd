import { Component } from '@angular/core';
import { InventarioService } from '../../shared/inventario.service';

@Component({
    selector: 'app-produtos',
    templateUrl: './produtos.component.html',
    styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
    product = { name: '', price: 0, date: '' };
    products: any[] = [];
    inventoryItems: any[] = [];

    constructor(private inventoryService: InventarioService) {
        this.inventoryItems = this.inventoryService.getItems(); // Obtém os itens do inventário
    }

    addProduct() {
        if (this.product.name && this.product.price > 0 && this.product.date) {
        this.products.push({ ...this.product });
        this.product = { name: '', price: 0, date: '' }; // Limpa o formulário
        }
    }

    totalPrice() {
        return this.products.reduce((total, item) => total + item.price, 0);
    }
}
