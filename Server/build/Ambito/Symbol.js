"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = void 0;
class Symbol {
    constructor(_id, _valor, _tipo, _linea, _columna) {
        this.id = _id;
        this.value = _valor;
        this.type = _tipo;
        this.line = _linea;
        this.column = _columna;
    }
}
exports.Symbol = Symbol;
