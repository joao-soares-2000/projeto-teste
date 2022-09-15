import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { NavComponent } from './templates/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './templates/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    HomeComponent,
    NavComponent,
    CadastroProdutosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
