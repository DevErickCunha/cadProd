import { Component } from '@angular/core';

// Interface do Produto
interface Produto {
    name: string;
    price: number;
    date: string;
}

@Component({
    selector: 'app-produtos',
    templateUrl: './produtos.component.html',
    styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  // Use a interface Produto para tipar os objetos
    product: Produto = {
    name: '',
    price: 0,
    date: ''
};

  products: Produto[] = []; // Lista de produtos tipada com a interface

addProduct() {
    // Adiciona o produto na lista
    this.products.push({ ...this.product });

    // Reseta o formulário
    this.product = {
        name: '',
        price: 0,
        date: ''
    };
}

totalPrice(): number {
    // Calcula o total de preços
    return this.products.reduce((sum, item) => sum + item.price, 0);
    }
}
