import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { DetalleComponent } from './detalle/detalle.component';
const routes: Routes = [
  { path: '', component: PokemonesComponent },
  { path: 'detalle', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
