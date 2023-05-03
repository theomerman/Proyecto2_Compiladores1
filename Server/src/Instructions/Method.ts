export class Method{
    id: string;
    lista_parametro: [];
    instrucciones: [];
    linea: number;
    columna: number;

    constructor(_id: string, _lista_parametro: [], _instrucciones: [], _linea: number, _columna: number){
        this.id = _id;
        this.lista_parametro = _lista_parametro;
        this.instrucciones = _instrucciones;
        this.linea = _linea;
        this.columna = _columna;
    }
}
