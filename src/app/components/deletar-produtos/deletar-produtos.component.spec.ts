import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarProdutosComponent } from './deletar-produtos.component';

describe('DeletarProdutosComponent', () => {
  let component: DeletarProdutosComponent;
  let fixture: ComponentFixture<DeletarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
