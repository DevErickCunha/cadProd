import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,  // Define LayoutComponent como a base
    children: [
      { path: 'produtos', component: ProdutosComponent },  // Componente Produtos como filho
    ],
  },
  { path: '**', redirectTo: '' },  // Rota coringa para redirecionamento
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
