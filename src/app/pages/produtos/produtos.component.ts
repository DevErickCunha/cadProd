import { Component } from '@angular/core';
import { InventarioService } from '../../shared/inventario.service';
import { Item } from '../inventario/inventario.component';

@Component({
    selector: 'app-produtos',
    templateUrl: './produtos.component.html',
    styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
    product = { name: '', qtd: 0, date: '' };
    products: any[] = [];
    inventoryItems: Item[] = [];

    constructor(private inventoryService: InventarioService) {
    this.inventoryService.getItems().subscribe(res=>{
        this.inventoryItems = res
        }); // Obtém os itens do inventário
    }

    addProduct() {
        if (this.product.name && this.product.qtd > 0 && this.product.date) {
        this.products.push({ ...this.product, price: this.inventoryItems.find(i => i.name==this.product.name)?.price as number * this.product.qtd});
        this.product = { name: '', qtd: 0, date: '' }; // Limpa o formulário
        }
    }

    totalPrice() {
        return this.products.reduce((total, item) => total + item.price, 0);
    }
}
