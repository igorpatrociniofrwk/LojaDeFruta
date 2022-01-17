import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from 'src/app/services/ofertas.service';


@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css'],
  providers: [OfertasService]
})
export class FrutasComponent implements OnInit {

  public ofertas: Oferta[]
  public ofertaPorCategoria: any
  

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria('frutas')
    .subscribe(res => this.ofertas = res)
    console.log(this.ofertas)

  }

}
