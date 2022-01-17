import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from 'src/app/services/ofertas.service'; 

@Component({
  selector: 'app-salada',
  templateUrl: './salada.component.html',
  styleUrls: ['./salada.component.css'],
  providers: [OfertasService]
})
/* export class SaladaComponent implements OnInit {

  public ofertas: Oferta[]
  public ofertaPorCategoria: any

  constructor(private ofertasService: OfertasService) { }


  ngOnInit() {
    this.ofertaPorCategoria = this.ofertasService.getOfertasCategoria('salada')
    console.log(this.ofertaPorCategoria)
  }

} */

export class SaladaComponent implements OnInit {
  public categoria: string = 'salada';
  public ofertas: Oferta[]; 

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria(this.categoria)
    .subscribe((salada: Oferta[]) => { 
      this.ofertas = salada;
      console.log(this.ofertas)
    })
  }

}
