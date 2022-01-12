import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ROUTES } from './app-routing.module'

import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { HomeComponent } from './components/home/home.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { FrutasComponent } from './components/frutas/frutas.component';
import { SaladaComponent } from './components/salada/salada.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ComoUsarComponent } from './components/oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './components/oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './components/ordem-compra-sucesso/ordem-compra-sucesso.component';

import { CarrinhoService } from './services/carrinho.service';

import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { AuthService } from './components/login/auth.service';
import { AuthGuard } from './components/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    FrutasComponent,
    SaladaComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CarrinhoService, { provide: LOCALE_ID, useValue: 'pt-Br' },
    AuthService, 
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
