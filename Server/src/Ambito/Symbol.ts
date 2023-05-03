import { Type } from "../Enums/Type";

export class Symbol{
    id : string;
    valor : string;
    tipo : Type;
    linea : number;
    columna : number;

    constructor(_id: string, _valor: string, _tipo: Type, _linea: number, _columna: number){
        this.id = _id;
        this.valor = _valor;
        this.tipo = _tipo;
        this.linea = _linea;
        this.columna = _columna;
    }
}
