import { Expression } from "../Abstract/Expression";
import { Enviroment } from "../Ambito/Enviroment";
import { Type } from "../Enums/Type";

export class Literal extends Expression{
    value: string;
    type: Type;
    constructor(value: string, type: Type, line: number, column: number){
        super(line, column);
        this.value = value;
        this.type = type;
    }

    public execute(enviroment: Enviroment) {
        if(this.type == Type.INT)
            return { value: Number(this.value), type: Type.INT, line: this.line, column: this.column };
        
        else if(this.type == Type.DOUBLE)
            return { value: Number(this.value), type: Type.DOUBLE, line: this.line, column: this.column };

        else if(this.type == Type.STRING)
            return { value: this.value, type: Type.STRING, line: this.line, column: this.column };

        else if(this.type == Type.BOOLEAN)
            return { value: this.booleanType(this.value), type: Type.BOOLEAN, line: this.line, column: this.column };

        else if(this.type == Type.CHAR)
            return { value: this.value, type: Type.CHAR, line: this.line, column: this.column };
            
        else if(this.type == Type.ID)
            return { value: this.value, type: Type.ID, line: this.line, column: this.column };

        else return { value: this.value, type: Type.error, line: this.line, column: this.column};
    }


    booleanType(value: string){
        if(this.value.toLocaleLowerCase() == "true")
            return Boolean(true);
        else
            return Boolean(false);
    }

}