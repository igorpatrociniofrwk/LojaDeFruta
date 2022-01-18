import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs'; 
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Oferta[]
  public subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {  }
  
  public pesquisa(pesquisa: string): void {
    let ofertas = this.ofertasService.pesquisaOferta(pesquisa);
    ofertas.subscribe((valor: Oferta[]) => this.ofertas = valor);
    console.log(this.ofertas);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}