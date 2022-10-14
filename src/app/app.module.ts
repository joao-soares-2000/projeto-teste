import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormModule } from './components/cadastro-produtos/data-form.module';
import { HomeComponent } from './components/home/home.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NavComponent } from './templates/nav/nav.component';
import { EditarProdutosComponent } from './components/editar-produtos/editar-produtos.component';
import { DeletarProdutosComponent } from './components/deletar-produtos/deletar-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    EditarProdutosComponent,
    DeletarProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
