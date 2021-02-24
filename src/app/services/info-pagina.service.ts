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
  equipo: any [] = [];

  constructor( private http: HttpClient ) { 
    
    console.log('Info de pagina')
    this.cargarInfo();
    this.cargarEquipo();


   }

   private cargarInfo(){

  //Peticion http
  // Leyendo el archivo json
  this.http.get('assets/data/data-pagina.json')

    // Si la respuesta es de tipo InfoPagina, trae los datos de la interfaz
  .subscribe( (resp :InfoPagina) => {

    this.cargada = true;
    this.info = resp;
  });
  // end Peticion http
     
  }

  private cargarEquipo(){
    //Peticion http
  // Leyendo el archivo json
  this.http.get('https://angular-html-a1e58-default-rtdb.firebaseio.com/equipo.json')

  // Si la respuesta es de tipo InfoPagina, trae los datos de la interfaz
  .subscribe( (resp :any) => {

    this.equipo = resp;
    //console.log(resp );
  });
  // end Peticion http
  }
}
