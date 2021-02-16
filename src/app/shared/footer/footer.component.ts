import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  annio: number = new Date().getFullYear();

  //Tengo que injectar la info de info-pagina.service 👇 por medio de las interfaces
  constructor( public _servicio: InfoPaginaService ) { }
  // Este es el nombre de la 👆 propiedad y este 👆, del servicio

  ngOnInit(): void {
  }

}
