import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Tengo que injectar la info de info-pagina.service 👇 por medio de las interfaces
  constructor( public _servicio: InfoPaginaService ) { }
  // Este es el nombre de la 👆 propiedad y este 👆, del servicio

  ngOnInit(): void {
  }

}
