import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Pedido } from './../shared/pedido.model';

import { OrdemCompraService } from 'src/app/services/ordem-compra.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ItemCarrinho } from '../shared/item.carrinho.model';

import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  observable$: ReplaySubject<any>;

  public idPedidoCompra: number;
  public itensCarrinho: ItemCarrinho[] = [];
  public totalCarrinho: number;

  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    numero: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, Validators.required)
  });

  public _escondeForm: boolean = false;

  constructor(
    private ordemCompraService: OrdemCompraService, 
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    this.carrinhoService.TotalObservable().subscribe((Total)=>this.totalCarrinho = Total);
    
    if(this.itensCarrinho.length == 0) {
      this.formulario = new FormGroup({
        endereco: new FormControl({value: '', disabled: true}),
        numero: new FormControl({value: '', disabled: true}),
        complemento: new FormControl({value: '', disabled: true}),
        formaPagamento: new FormControl({value: '', disabled: true}),
      })
    }
  }

  public confirmarCompra(): void {
    console.log(this.formulario);

    if(this.formulario.status == 'INVALID') {
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
    } else {
      let pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.carrinhoService.exibirItens()
      );

      
      this.ordemCompraService.efetivaCompra(pedido).subscribe(x => {
        console.log(x);
        this.idPedidoCompra = x.id;
      });
    }
  }

  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item)
  }

  public retirar(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item);

    if(this.itensCarrinho.length == 0) this.escondeForm();
  }

  public escondeForm(): void {
    this._escondeForm = true;
  }

}