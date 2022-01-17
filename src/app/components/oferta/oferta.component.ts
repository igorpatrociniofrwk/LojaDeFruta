import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from '../shared/oferta.model'
import { CarrinhoService } from 'src/app/services/carrinho.service'; 

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {
  parametro: number;
  oferta: any;
  _oferta: any;

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {

    /* this.parametro = this.route.snapshot.params['id'];
    console.log(this.parametro);

    this.ofertasService.getOfertas().subscribe((oferta: Oferta[])=> {
      console.log(oferta[0]);
      this._oferta = oferta[0];
      this.oferta = this._oferta;
    }) */

    this.route.params.subscribe((parametros: Params) => {

      this.ofertasService.getOfertaPorId(parametros['id']).subscribe((oferta: Oferta[])=> {
        console.log(oferta[0]);
        this._oferta = oferta[0];
        this.oferta = this._oferta;
      })
    })
  }

  public adicionarItemCarrinho() {
    this.carrinhoService.incluirItem(this._oferta);
    console.log(this.carrinhoService.exibirItens());
  }

}

