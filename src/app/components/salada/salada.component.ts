import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from 'src/app/services/ofertas.service'; 

@Component({
  selector: 'app-salada',
  templateUrl: './salada.component.html',
  styleUrls: ['./salada.component.css'],
  providers: [OfertasService]
})
export class SaladaComponent implements OnInit {

  public ofertas: Oferta[]
  public ofertaPorCategoria: any

  constructor(private ofertasService: OfertasService) { }


  ngOnInit() {
    this.ofertaPorCategoria = this.ofertasService.getOfertasPorCategoria('salada')
    console.log(this.ofertaPorCategoria)
/*         console.log(ofertas)
        this.ofertas = ofertas */
  }

}
