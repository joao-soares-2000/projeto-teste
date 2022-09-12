import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './templates/nav/nav.component';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    HomeComponent,
    NavComponent,
    CadastroProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
