import { Method } from "../Instructions/Method";
import { Symbol } from "./Symbol";
export class Enviroment{
    public tablaSimbolos: Map<string, Symbol>;
    public tablaMetodos: Map<string, Method>;
    public anterior: Enviroment | null;
    constructor(anterior: Enviroment | null, actual: string){
        this.tablaSimbolos = new Map<string, Symbol>();
        this.tablaMetodos = new Map<string, Method>();
        this.anterior = anterior;
    }

    public addSymbol(_clave: string, _valor: Symbol){ //agregar simbolo
        if(!this.tablaSimbolos.has(_clave)){
            this.tablaSimbolos.set(_clave, _valor);

        }else{
            console.log("Error Semantico: La variable '" + _clave + "' ya existe en el ambito actual");
            alert("Error Semantico: La variable '" + _clave + "' ya existe en el ambito actual");
        }
    }  

    public getSymbol(_clave: string){  //retornar simbolo
        let tmp: Enviroment | null = this;
        while(tmp != null){
            if(tmp.tablaSimbolos.has(_clave)){
                return tmp.tablaSimbolos.get(_clave);
            }
            tmp = tmp.anterior;
        }
        return null;
    }

    public updateSymbol(_clave:string, symbol: Symbol){
        let tmp: Enviroment | null = this;
        while(tmp != null){
            if(tmp.tablaSimbolos.has(_clave)){
                tmp.tablaSimbolos.set(_clave, symbol);
                return true;
            }
            tmp = tmp.anterior;
        }
        return false;
    }

    public addMethod(_clave: string, _valor: Method){ //agregar simbolo
        if(!this.tablaMetodos.has(_clave)){
            this.tablaMetodos.set(_clave, _valor);

        }else{
            console.log("Error Semantico: El metodo '" + _clave + "' ya existe en el ambito actual");
            alert("Error Semantico: El metodo '" + _clave + "' ya existe en el ambito actual");
        }
    }

    public getMethod(_clave: string){  //retornar simbolo
        let tmp: Enviroment | null = this;
        while(tmp != null){
            if(tmp.tablaMetodos.has(_clave)){
                return tmp.tablaSimbolos.get(_clave);
            }
            tmp = tmp.anterior;
        }
        return null;
    }
}