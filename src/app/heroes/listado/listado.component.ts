import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

 heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
 heroeborrado:string = '';

 borrarHeroe() {
  this.heroeborrado = this.heroes.shift() || '';
  console.log('Has borrado ' + this.heroeborrado)
 }
}
