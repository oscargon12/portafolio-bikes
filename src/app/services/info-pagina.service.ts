import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces' 
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) { 
    console.log('Info de pagina')

    // Leyendo el archivo json
  this.http.get('assets/data/data-pagina.json')

    // Si la respuesta es de tipo InfoPagina, trae los datos de la interfaz
    .subscribe( (resp :InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      console.log(resp );
    });

   }
}
