"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operations = void 0;
const Expression_1 = require("../Abstract/Expression");
const Operator_1 = require("../Enums/Operator");
const Type_1 = require("../Enums/Type");
class Operations extends Expression_1.Expression {
    constructor(left, right, type, line, column) {
        super(line, column);
        this.left = left;
        this.right = right;
        this.type = type;
    }
    execute(env) {
        const nodoLeft = this.left.execute(env);
        let nodoRight = this.left.execute(env);
        if (this.right != null) {
            nodoRight = this.right.execute(env);
        }
        if (this.type == Operator_1.Operator.SUMA) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: Number(nodoLeft.value + nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value + nodoRight.value.charCodeAt(0)), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value + nodoRight.value.charCodeAt(0)), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
            //------BLOQUE_BOOLEAN-------
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) + nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) + nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
            //------BLOQUE_STRING-------
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value + nodoRight.value), type: Type_1.Type.STRING, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.RESTA) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value - nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value - nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value - nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value - nodoRight.value.charCodeAt(0)), type: Type_1.Type.INT, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value - nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value - nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value - nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value - nodoRight.value.charCodeAt(0)), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            //------BLOQUE_BOOLEAN-------
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value - nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value - nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) - nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) - nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.MULTIPLICACION) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value * nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value * nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value * nodoRight.value.charCodeAt(0)), type: Type_1.Type.INT, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value * nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value * nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value * nodoRight.value.charCodeAt(0)), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) * nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) * nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.DIVISION) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value / nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value / nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value / nodoRight.value.charCodeAt(0)), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value / nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value / nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value / nodoRight.value.charCodeAt(0)), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) / nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) / nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.POTENCIA) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value ** nodoRight.value), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value ** nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value ** nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value ** nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.MODULO) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value % nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value % nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value % nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value % nodoRight.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.UNARIO_MENOS) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT)
                return { value: (nodoLeft.value * -1), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value * -1), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.INCREMENTO) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT)
                return { value: (nodoLeft.value + 1), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value + 1), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.DECREMENTO) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT)
                return { value: (nodoLeft.value - 1), type: Type_1.Type.INT, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value - 1), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.COMPARACION) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value == nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value == nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_BOOLEAN-------
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_STRING-------
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value == nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.DIFERENTE) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value != nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value != nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_BOOLEAN-------
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_STRING-------
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value != nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.MENOR) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value < nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value < nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_BOOLEAN-------
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_STRING-------
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value < nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.MENORIGUAL) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value <= nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value <= nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_BOOLEAN-------
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_STRING-------
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value <= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.MAYOR) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value > nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value > nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_BOOLEAN-------
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_STRING-------
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value > nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.MAYORIGUAL) {
            //------BLOQUE_INT----------
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value >= nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_DOUBLE-------
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.INT && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value >= nodoRight.value.charCodeAt(0)), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.DOUBLE && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_BOOLEAN-------
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.BOOLEAN && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_CHAR-------
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value.charCodeAt(0) >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value.charCodeAt(0) >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.CHAR && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            //------BLOQUE_STRING-------
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.INT)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.DOUBLE)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.BOOLEAN)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.CHAR)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.type == Type_1.Type.STRING && nodoRight.type == Type_1.Type.STRING)
                return { value: (nodoLeft.value >= nodoRight.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.OR) {
            //------BLOQUE_INT----------
            if (nodoLeft.value == false && nodoRight.value == false)
                return { value: Boolean(false), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.value == false && nodoRight.value == true)
                return { value: Boolean(true), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.value == true && nodoRight.value == false)
                return { value: Boolean(true), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.value == true && nodoRight.value == true)
                return { value: Boolean(true), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.AND) {
            //------BLOQUE_INT----------
            if (nodoLeft.value == false && nodoRight.value == false)
                return { value: Boolean(false), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.value == false && nodoRight.value == true)
                return { value: Boolean(false), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.value == true && nodoRight.value == false)
                return { value: Boolean(false), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.value == true && nodoRight.value == true)
                return { value: Boolean(true), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        }
        if (this.type == Operator_1.Operator.NOT) {
            if (nodoLeft.value == false)
                return { value: Boolean(true), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
            if (nodoLeft.value == true)
                return { value: Boolean(false), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        }
        return { value: null, type: Type_1.Type.error, line: this.line, column: this.column };
    }
}
exports.Operations = Operations;
