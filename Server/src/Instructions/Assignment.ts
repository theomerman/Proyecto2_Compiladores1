import { Expression } from "../Abstract/Expression";
import { Instruction } from "../Abstract/Instruction";
import { Enviroment } from "../Ambito/Enviroment";

export class Assignment extends Instruction{

    constructor(public id: string, public value: Expression, line: number, column: number){
        super(line, column);
    }
    
    public execute(env: Enviroment) {
        const value = this.value.execute(env);
        if(value.type == this.value.type){
            if(env.updateSymbol(this.id, value)){
                return null;
            }
            console.log("Error Semantico: La variable '" + this.id + "' no existe en el ambito actual");
            alert("Error Semantico: La variable '" + this.id + "' no existe en el ambito actual");
        }
        else{
            console.log("Error Semantico: El tipo de dato no coincide con el tipo de la variable '" + this.id + "'");
            alert("Error Semantico: El tipo de dato no coincide con el tipo de la variable '" + this.id + "'");
        }
        
    }
}