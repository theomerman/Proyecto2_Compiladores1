import { Metodo } from "./Metodo";
import { Simbolo } from "./Simbolo";

class Ambito{
    anterior: Ambito;
    nombre: string;
    tablaSimbolos: Map<string, any>;
    tablaMetodos: Map<string, any>;
    constructor(_anterior: Ambito, _actual: string){   // new Ambito(null, "global")
        this.anterior = _anterior;
        this.nombre = _actual;
        this.tablaSimbolos = new Map();
        this.tablaMetodos = new Map();
    }
    addSimbolo(_clave: string, _simbolo:Simbolo){ //agregar simbolo
        this.tablaSimbolos.set(_clave.toLowerCase(), _simbolo)  

    }
    getSimbolo(_clave: string){  //retornar simbolo
        for(let e: Ambito=this; e!=null; e=e.anterior){
            var encontrado = e.tablaSimbolos.get(_clave.toLowerCase())
            if(encontrado!=null){
                return encontrado
            }
        }
        return null
    }
    existeSimbolo(_clave: string){  //retornar simbolo
        for(let e: Ambito=this; e!=null; e=e.anterior){
            var encontrado = e.tablaSimbolos.get(_clave.toLowerCase())
            if(encontrado!=null){
                return true
            }
        }
        return false
    }
    existeSimboloAmbitoActual(_clave: string){  //retornar simbolo
        
        var encontrado = this.tablaSimbolos.get(_clave.toLowerCase())
        if(encontrado!=null){
            return true
        }
        return false
    }
    actualizar(_clave: string,_simbolo: Simbolo){
        for(let e: Ambito=this; e!=null; e=e.anterior){
            var encontrado = e.tablaSimbolos.get(_clave.toLowerCase())
            if(encontrado!=null){
                e.tablaSimbolos.set(_clave,_simbolo)
                return true;
            }
            
        }
        return false;
    }
    addMetodo(_s: string, _metodo: Metodo){ //agregar metodo
        this.tablaMetodos.set(_s.toLowerCase(), _metodo)
    }
    getMetodo(_s: string){ //(hola, clase simbolo)
        for(let e: Ambito=this; e!=null; e=e.anterior){
            var encontrado = e.tablaMetodos.get(_s.toLowerCase()) //hola<=>HoLA
            if(encontrado!=null){
                return encontrado
            }
        }
        return null
    }
    existeMetodo(_s: string){ //verificar si existe metodo
        for(let e: Ambito=this; e!=null; e=e.anterior){
            var encontrado = e.tablaMetodos.get(_s.toLowerCase()) 
            if(encontrado!=null){
                return true
            }
        }
        return false
    }

}
module.exports= Ambito

























// export class Ambito{

//     anterior: Ambito | null;
//     actual: string;
//     tablaSimbolos: Map<string, any>;
//     tablaMetodos: Map<string, any>;
//     constructor(anterior: Ambito | null, actual: string){
//         this.anterior = anterior;
//         this.actual = actual;
//         this.tablaSimbolos = new Map<string, any>();
//         this.tablaMetodos = new Map<string, any>();
//     }

//     addSimbolo(id: string, valor: any){
//         this.tablaSimbolos.set(id.toLocaleLowerCase(), valor);        
//     }
//     getSimbolo(id: string): any{
//         for(let ambito: Ambito | null = this; ambito != null; ambito = ambito.anterior){
//             if(ambito.tablaSimbolos.has(id.toLocaleLowerCase())){
//                 return ambito.tablaSimbolos.get(id.toLocaleLowerCase());
//             }
//         }
//         return null;
//     }

//     existeSimbolo(id: string): boolean{
//         for(let ambito: Ambito | null = this; ambito != null; ambito = ambito.anterior){
//             if(ambito.tablaSimbolos.has(id.toLocaleLowerCase())){
//                 return true;
//             }
//         }
//         return false;
//     }
// }