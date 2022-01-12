import { HttpClient, HttpResponse } from "@angular/common/http"
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators';

import { Oferta } from "../components/shared/oferta.model";
import { URL_API } from "../app.api"; 

import { Observable } from 'rxjs'

@Injectable()
export class OfertasService {
    constructor(private http: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }
    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json())
    }
    public getOfertaPorId(id: number): Promise<any> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.json()[0])
    }
    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {

                return resposta.json()[0].descricao
            })
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {

                return resposta.json()[0].descricao
            })
    }

    public pesquisaOferta(termo:string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
        .pipe(map((resposta: any)=> resposta.json()))
        }
}
