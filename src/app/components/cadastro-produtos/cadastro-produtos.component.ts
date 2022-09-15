import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['produtos'])
  }
}
