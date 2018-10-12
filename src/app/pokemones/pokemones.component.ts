import { Component, OnInit } from '@angular/core';
import{PokeService} from './../poke.service'

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

  pokemones: Array<any>=this.pokemones;
  constructor(private _servicio:PokeService) {
    this.pokemones= _servicio.obtenerpokemones();
   }

  ngOnInit() {
  }

}
