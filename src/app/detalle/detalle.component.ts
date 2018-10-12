import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import{PokeService} from './../poke.service'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number;
  pokemon: Array<any>;

constructor(private route: ActivatedRoute, private _servicio:PokeService) {
    this.id = this.route.snapshot.params.id;
    this.pokemon= _servicio.obtenerpokemones(this.id);
}

  ngOnInit() {
  }

}
