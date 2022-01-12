import { Routes } from '@angular/router'

import { AuthGuard } from './components/guards/auth.guard';
import { HomeComponent } from './components/home/home.component'
import { FrutasComponent } from './components/frutas/frutas.component'
import { SaladaComponent } from './components/salada/salada.component'
import { OfertaComponent } from './components/oferta/oferta.component'
import { OrdemCompraComponent } from "./components/ordem-compra/ordem-compra.component";
import { LoginComponent } from './components/login/login.component';

export const ROUTES: Routes = [
    { 
        path: '', 
        component: LoginComponent 
    },
    { 
        path: 'home', 
        canActivate: [AuthGuard],
        component: HomeComponent 
    },
    { 
        path: 'frutas', 
        canActivate: [AuthGuard],
        component: FrutasComponent 
    },
    { 
        path: 'salada', 
        canActivate: [AuthGuard],
        component: SaladaComponent 
    },
    { 
        path: 'oferta', 
        canActivate: [AuthGuard],
        component: HomeComponent 
    },
    { 
        path: 'oferta/:id', 
        canActivate: [AuthGuard],
        component: OfertaComponent 
    },
    { 
        path: 'ordem-compra', 
        canActivate: [AuthGuard],
        component: OrdemCompraComponent 
    }
]