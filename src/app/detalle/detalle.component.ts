import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: string;

constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
}

  ngOnInit() {
  }

}
