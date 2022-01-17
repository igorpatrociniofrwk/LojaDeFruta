import { Oferta } from './../components/shared/oferta.model';
import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core'

import { URL_API } from "../app.api"; 

import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class OfertasService {

    constructor(private http: HttpClient) { }

    public getOfertas() {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`)
    }

    public getOfertasCategoria(categoria: string) {
        return this.http.get<Oferta[]>(`${URL_API}/categoria=${categoria}`)
    }

    public getOfertaPorId(id: number) {
        return this.http.get<Oferta[]>(`${URL_API}/ofertas?id=${id}`)
    }

    public pesquisaOferta(termo: string): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${URL_API}?descricao_oferta_like=${termo}`)
        .pipe((resposta: any) => resposta);
    }
}
