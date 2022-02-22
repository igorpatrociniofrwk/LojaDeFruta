import { OfertasService } from 'src/app/services/ofertas.service';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { TopoComponent } from './topo.component'; 
import { Observable, of, throwError } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Input } from '@angular/core';

class MockOfertasService {
    pesquisaOferta(): Observable<any> { return null; }
}

describe('TopoComponent', () => {
  let injector: TestBed;
  let component: TopoComponent;
  let fixture: ComponentFixture<TopoComponent>;
  let ofertasService: OfertasService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, BrowserAnimationsModule],
      declarations: [ TopoComponent ],
      providers: [
        { provide: OfertasService, useClass: MockOfertasService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(TopoComponent);
    component = fixture.componentInstance;
    ofertasService = injector.get(OfertasService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Dado a pesquisa
      Quando for executada com sucesso
      Deve retornar os nomes das ofertas`, () => {

    const mockResponse = {
        ofertas: {
          items: [
            { name: 'Oferta Name'}
          ]
        }
    };
    
    const button = fixture.nativeElement.querySelector('._a');

    button.click();
    fixture.detectChanges();

    expect(ofertasService.pesquisaOferta).toHaveBeenCalledTimes(1);
    expect(ofertasService.pesquisaOferta).toHaveBeenCalledWith("fresquinha");
  });

  it(`Dado a pesquisa
      Quando for executada com erro
      Deve retornar uma mensagem de erro`, () => {
    const errorResponse = {
      status: 400,
      message: 'Falha ao realizar chamada'
    };

    const button = fixture.nativeElement.querySelector('._a');

    spyOn(ofertasService, 'pesquisaOferta').and.returnValue(throwError(errorResponse));
    button.click();
    fixture.detectChanges();

    const error = fixture.nativeElement.querySelector('.error');
    expect(ofertasService.pesquisaOferta).toHaveBeenCalledTimes(1);
    expect(error.textContent).toContain(errorResponse.message);
  });
});
