import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
// import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // bandera que indique carga
  cargando = true;
  productos: Producto[] = [];
  // Con esto le digo que es un array vacío y sus items son tipo producto

  //nuevo arreglo para filtros
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarProductos();
   }

  private cargarProductos () {

      return new Promise<void>(( resolve, reject ) => {

      // Definición de la peticio
      this.http.get('https://angular-html-a1e58-default-rtdb.firebaseio.com/productos_idx.json')

      // Petición http
      // La respuesta es un array de producto creado en la interfaz
      // .subscribe( (resp :Producto) => {
      .subscribe( (resp :any) => { // con una respuesta de tipo Producto no funciona, la cambié a tipo any

        console.log(resp);
        this.productos = resp;
        this.cargando = false;
        //resolve();

        setTimeout(() => {
          this.cargando = false;
        }, 2000);
        // Este setTimeOut se usa para visualizar el loader

      });
    });


  }

  getProducto( id: string ){
    return this.http.get(`https://angular-html-a1e58-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }


}
