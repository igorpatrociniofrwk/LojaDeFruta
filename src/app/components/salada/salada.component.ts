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
  public categoria: string = 'salada';
  public ofertas: Oferta[]; 

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCategoria(this.categoria)
    .subscribe((salada: Oferta[]) => { 
      this.ofertas = salada;
    })
  }

}
