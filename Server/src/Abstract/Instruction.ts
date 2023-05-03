import { Enviroment } from "../Ambito/Enviroment";

export abstract class Instruction{
    constructor(public line: number, public column: number){
        this.line = line;
        this.column = column + 1;
    }
    public abstract execute(env: Enviroment): any;
}