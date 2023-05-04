"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enviroment = void 0;
class Enviroment {
    constructor(anterior, actual) {
        this.tablaSimbolos = new Map();
        this.tablaMetodos = new Map();
        this.anterior = anterior;
    }
    addSymbol(_clave, _valor) {
        if (!this.tablaSimbolos.has(_clave)) {
            this.tablaSimbolos.set(_clave, _valor);
        }
        else {
            console.log("Error Semantico: La variable '" + _clave + "' ya existe en el ambito actual");
            alert("Error Semantico: La variable '" + _clave + "' ya existe en el ambito actual");
        }
    }
    getSymbol(_clave) {
        let tmp = this;
        while (tmp != null) {
            if (tmp.tablaSimbolos.has(_clave)) {
                return tmp.tablaSimbolos.get(_clave);
            }
            tmp = tmp.anterior;
        }
        return null;
    }
    updateSymbol(_clave, symbol) {
        let tmp = this;
        while (tmp != null) {
            if (tmp.tablaSimbolos.has(_clave)) {
                tmp.tablaSimbolos.set(_clave, symbol);
                return true;
            }
            tmp = tmp.anterior;
        }
        return false;
    }
    addMethod(_clave, _valor) {
        if (!this.tablaMetodos.has(_clave)) {
            this.tablaMetodos.set(_clave, _valor);
        }
        else {
            console.log("Error Semantico: El metodo '" + _clave + "' ya existe en el ambito actual");
            alert("Error Semantico: El metodo '" + _clave + "' ya existe en el ambito actual");
        }
    }
    getMethod(_clave) {
        let tmp = this;
        while (tmp != null) {
            if (tmp.tablaMetodos.has(_clave)) {
                return tmp.tablaSimbolos.get(_clave);
            }
            tmp = tmp.anterior;
        }
        return null;
    }
}
exports.Enviroment = Enviroment;
