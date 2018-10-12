import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { DetalleComponent } from './detalle/detalle.component';
import {PokeService} from './poke.service'

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent,
    DetalleComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
