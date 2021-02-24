import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { Producto } from '../../interfaces/producto.interface';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion = {};
  id: string | undefined;

  constructor(private route: ActivatedRoute,
    public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
    .subscribe( parametros  => {
      console.log(parametros);
      console.log(parametros['id']);

      this.productoService.getProducto(parametros['id'])
      .subscribe( (producto: ProductoDescripcion) => {
        this.id = parametros['id']
        console.log(producto)
        this.producto = producto;
      });

    })
  }

}
