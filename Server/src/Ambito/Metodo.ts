export class Metodo{
    id: any;
    lista_parametro: any;
    instrucciones: any;
    linea: any;
    columna: any;

    constructor(_id: any, _lista_parametro: any, _instrucciones: any, _linea: any, _columna: any){
        this.id = _id;
        this.lista_parametro = _lista_parametro;
        this.instrucciones = _instrucciones;
        this.linea = _linea;
        this.columna = _columna;
    }
}
