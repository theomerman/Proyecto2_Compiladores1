import { Enviroment } from "../Ambito/Enviroment";

export abstract class Expression {
    line: number;
    column: number;
    constructor(line: number, column: number) {
        this.line = line;
        this.column = column + 1;
    }
    public abstract execute(enviroment: Enviroment): any;
}