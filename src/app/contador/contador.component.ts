import {Component} from '@angular/core';
//este es un decorador para convertir la clase ContadorComponent 
    //en un componente de angular.
//'@angular/core' es un paquete del que podemos extraer cosas
    //haciendo cntrl+espacio en {} veriamos las opciones


@Component({
    selector: 'app-contador',
    template:`<h1> {{titulo}} </h1>
    <h3>  La base es: <strong>{{base}}</strong> </h3>
    <button (click)="acumular(+1)"> +{{base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(-1)"> -{{base}}  </button>`
})

export class ContadorComponent {
    titulo:string = 'Contador App';
    numero: number = 10;
    //esto crea la variable número que por defecto=10
    base: number = 5 ;
    acumular (valor:number) {
      this.numero +=this.base*valor;
      //this hace referencia al último objeto
      // el 1o significa Appcomponent.numero
      // el 2o significa Appcomponent.base
      //this como method se utiliza para modificar una variable
}}