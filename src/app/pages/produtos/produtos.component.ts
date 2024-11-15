import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

interface Produto {
  nome: string;
  data: string;
  preco: number;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  nome: string = '';
  data: string = '';
  preco: number = 0; // Inicializado com 0 para evitar problemas com null
  total: number = 0;
  mostrarRelatorio: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Carregar dados iniciais, se necessário
  }

  adicionarProduto(): void {
    if (this.nome && this.data && this.preco > 0) {
      const novoProduto: Produto = { nome: this.nome, data: this.data, preco: this.preco };
      this.produtos.push(novoProduto);

      // Limpar os campos
      this.nome = '';
      this.data = '';
      this.preco = 0;

      // Atualizar o total e forçar a detecção de mudanças
      this.atualizarTotal();
      this.cdr.detectChanges();
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  }

  atualizarTotal(): void {
    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }

  gerarRelatorio(): void {
    this.mostrarRelatorio = true;
    this.cdr.detectChanges();
  }
}