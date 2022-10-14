import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroProdutosComponent } from './cadastro-produtos.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [CadastroProdutosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class DataFormModule { }
