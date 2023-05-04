import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Enviroment } from "../Ambito/Enviroment";
import { Symbol } from "../Ambito/Symbol";
import { Type } from "../Enums/Type";

export class Assignment extends Instruction{

    constructor(public type: Type, public id: string, public value: Expression, line: number, column: number){
        super(line, column);
    }
    
    public execute(env: Enviroment) {
        let value = this.value.execute(env);

        if(env.tablaSimbolos.has(this.id))
            return { value: `La variable ${this.id} ya existe en este ambito`, type: Type.error, line: this.line, column: this.column };

        if(this.type == value.type){
            env.addSymbol(this.id, new Symbol(this.id, value.value, value.type, this.line, this.column));
        }
        
    }
}