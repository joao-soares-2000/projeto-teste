import { FormGroup } from '@angular/forms';
import { ProdutosService } from './../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Models/produto';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  produto: Produto = {
    descricao : '',
    unmedida : '',
    ncm : ''
    }

  constructor(private router: Router, private service: ProdutosService, private route: ActivatedRoute) { }

  public formulario! : FormGroup

  ngOnInit(): void {
    this.produto.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.produto.id!).subscribe((resposta) => {
      this.produto.descricao = resposta.descricao
      this.produto.ncm = resposta.ncm
      this.produto.unmedida = resposta.unmedida
    })
  }

  cancel(): void {
    this.router.navigate(['produtos'])
  }

  update(): void {
    this.service.update(this.produto).subscribe((resposta) => {
      this.router.navigate(["produtos"])
    })
  }

}
