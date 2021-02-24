import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Tengo que injectar la info de info-pagina.service 👇 por medio de las interfaces
  constructor( public _servicio: InfoPaginaService ,
    // Este es el nombre de la 👆 propiedad y este 👆, del servicio
                private router: Router ) { }

  ngOnInit(): void {
  }
  buscarProducto(termino: string) {

    if ( termino.length < 1 ){
      return;
    }

    // Navegación a la ruta search
    this.router.navigate(['/search', termino]);
    console.log(termino);
  }

}
