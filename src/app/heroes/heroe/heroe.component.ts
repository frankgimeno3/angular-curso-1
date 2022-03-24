import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
    export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenernombre():string {
    //esto requerirá una funcion que de string como resultado
        return `${this.nombre}-${this.edad}`;
        //esto `${}` se conoce como template literal
        //significa construir una string entre dos `` 
    }

    cambiarNombre () :void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad () : void {
        this.edad = 17 ;
    }
}