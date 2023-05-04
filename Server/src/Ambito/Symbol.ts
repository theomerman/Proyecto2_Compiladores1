import { Type } from "../Enums/Type";

export class Symbol{
    id : string;
    value : any;
    type : Type;
    line : number;
    column : number;

    constructor(_id: string, _valor: any, _tipo: Type, _linea: number, _columna: number){
        this.id = _id;
        this.value = _valor;
        this.type = _tipo;
        this.line = _linea;
        this.column = _columna;
    }
}
