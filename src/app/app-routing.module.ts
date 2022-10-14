import { EditarProdutosComponent } from './components/editar-produtos/editar-produtos.component';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletarProdutosComponent } from './components/deletar-produtos/deletar-produtos.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'produtos',
    component: ListaProdutosComponent
  },
  {
    path:'cadastro-produtos',
    component: CadastroProdutosComponent
  },
  {
    path:'produtos/editar/:id',
    component: EditarProdutosComponent
  },
  {
    path:'produtos/editar/:id',
    component: DeletarProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
