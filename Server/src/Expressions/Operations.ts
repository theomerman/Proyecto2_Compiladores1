import { Expression } from "../Abstract/Expression";
import { Enviroment } from "../Ambito/Enviroment";
import { Operator } from "../Enums/Operator";
import { Type } from "../Enums/Type";

export class Operations extends Expression{
    left: Expression;
    right: Expression;
    type: Operator;
    constructor(left: Expression, right: Expression, type: Operator,line: number, column: number){
        super(line, column);
        this.left = left;
        this.right = right;
        this.type = type;
        
    }

    public execute(env: Enviroment): any{
        const nodoLeft = this.left.execute(env);
        const nodoRight = this.right.execute(env);
        if(this.type == Operator.SUMA){
            //------BLOQUE_INT----------
            
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                
                return {value: Number(nodoLeft.value + nodoRight.value), type: Type.INT, line: this.line, column: this.column};
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value + nodoRight.value.charCodeAt(0)), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}

            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value + nodoRight.value.charCodeAt(0)), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}
            //------BLOQUE_BOOLEAN-------

            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) + nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) + nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}
            //------BLOQUE_STRING-------

            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value + nodoRight.value), type: Type.STRING, line: this.line, column: this.column}
        }
        if(this.type == Operator.RESTA){
            //------BLOQUE_INT----------

            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value - nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value - nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value - nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value - nodoRight.value.charCodeAt(0)), type: Type.INT, line: this.line, column: this.column}
            
            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value - nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value - nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value - nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value - nodoRight.value.charCodeAt(0)), type: Type.DOUBLE, line: this.line, column: this.column}
            //------BLOQUE_BOOLEAN-------

            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value - nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value - nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) - nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) - nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
        }
        if(this.type == Operator.MULTIPLICACION){
            //------BLOQUE_INT----------

            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value * nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value * nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value * nodoRight.value.charCodeAt(0)), type: Type.INT, line: this.line, column: this.column}
            
            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value * nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value * nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value * nodoRight.value.charCodeAt(0)), type: Type.DOUBLE, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) * nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) * nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
        }

        if(this.type == Operator.DIVISION){
            //------BLOQUE_INT----------

            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value / nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value / nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value / nodoRight.value.charCodeAt(0)), type: Type.DOUBLE, line: this.line, column: this.column}
            
            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value / nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value / nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value / nodoRight.value.charCodeAt(0)), type: Type.DOUBLE, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) / nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) / nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
        }
        if(this.type == Operator.POTENCIA){
            //------BLOQUE_INT----------

            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value ** nodoRight.value), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value ** nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value ** nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value ** nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
        }
        if(this.type == Operator.MODULO){
            //------BLOQUE_INT----------

            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value % nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value % nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value % nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value % nodoRight.value), type: Type.DOUBLE, line: this.line, column: this.column}
        }
        if(this.type == Operator.UNARIO_MENOS){
            //------BLOQUE_INT----------

            if(nodoLeft.type == Type.INT)
                return {value: (nodoLeft.value * -1), type: Type.INT, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE)
                return {value: (nodoLeft.value * -1), type: Type.DOUBLE, line: this.line, column: this.column}
        }
        if(this.type == Operator.COMPARACION){
            //------BLOQUE_INT----------
            
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value == nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}

            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value == nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_BOOLEAN-------

            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_STRING-------

            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value == nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
        }
        if(this.type == Operator.DIFERENTE){
            //------BLOQUE_INT----------
            
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value != nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}

            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value != nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_BOOLEAN-------

            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_STRING-------

            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value != nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
        }
        if(this.type == Operator.MENOR){
            //------BLOQUE_INT----------
            
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value < nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}

            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value < nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_BOOLEAN-------

            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_STRING-------

            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value < nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
        }
        if(this.type == Operator.MENORIGUAL){
            //------BLOQUE_INT----------
            
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value <= nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}

            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value <= nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_BOOLEAN-------

            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_STRING-------

            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value <= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
        }

        if(this.type == Operator.MAYOR){
            //------BLOQUE_INT----------
            
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value > nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}

            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value > nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_BOOLEAN-------

            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_STRING-------

            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value > nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
        }
        if(this.type == Operator.MAYORIGUAL){
            //------BLOQUE_INT----------
            
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value >= nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}

            //------BLOQUE_DOUBLE-------

            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.INT && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value >= nodoRight.value.charCodeAt(0)), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.DOUBLE && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_BOOLEAN-------

            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.BOOLEAN && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_CHAR-------

            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value.charCodeAt(0) >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value.charCodeAt(0) >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.CHAR && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            //------BLOQUE_STRING-------

            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.INT)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.DOUBLE)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.BOOLEAN)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.CHAR)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.type == Type.STRING && nodoRight.type == Type.STRING)
                return {value: (nodoLeft.value >= nodoRight.value), type: Type.BOOLEAN, line: this.line, column: this.column}
        }
        if(this.type == Operator.OR){
            //------BLOQUE_INT----------

            if(nodoLeft.value == false && nodoRight.value == false)
                return {value: Boolean(false), type: Type.BOOLEAN, line: this.line, column: this.column}

            if(nodoLeft.value == false && nodoRight.value == true)
                return {value: Boolean(true), type: Type.BOOLEAN, line: this.line, column: this.column}
                
            if(nodoLeft.value == true && nodoRight.value == false)
                return {value: Boolean(true), type: Type.BOOLEAN, line: this.line, column: this.column}
                
            if(nodoLeft.value == true && nodoRight.value == true)
                return {value: Boolean(true), type: Type.BOOLEAN, line: this.line, column: this.column}   

        }
 
        if(this.type == Operator.AND){
            //------BLOQUE_INT----------

            if(nodoLeft.value == false && nodoRight.value == false)
                return {value: Boolean(false), type: Type.BOOLEAN, line: this.line, column: this.column}

            if(nodoLeft.value == false && nodoRight.value == true)
                return {value: Boolean(false), type: Type.BOOLEAN, line: this.line, column: this.column}
                
            if(nodoLeft.value == true && nodoRight.value == false)
                return {value: Boolean(false), type: Type.BOOLEAN, line: this.line, column: this.column}
                
            if(nodoLeft.value == true && nodoRight.value == true)
                return {value: Boolean(true), type: Type.BOOLEAN, line: this.line, column: this.column}   

        }  
        

        if(this.type == Operator.NOT){
            if(nodoLeft.value == false)
                return {value: Boolean(true), type: Type.BOOLEAN, line: this.line, column: this.column}
            if(nodoLeft.value == true)
                return {value: Boolean(false), type: Type.BOOLEAN, line: this.line, column: this.column}
        }

        return {value: null, type: Type.error, line: this.line, column: this.column}



    }
}