"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Literal = void 0;
const Expression_1 = require("../Abstract/Expression");
const Type_1 = require("../Enums/Type");
class Literal extends Expression_1.Expression {
    constructor(value, type, line, column) {
        super(line, column);
        this.value = value;
        this.type = type;
    }
    execute() {
        if (this.type == Type_1.Type.INT)
            return { value: Number(this.value), type: Type_1.Type.INT, line: this.line, column: this.column };
        else if (this.type == Type_1.Type.DOUBLE)
            return { value: Number(this.value), type: Type_1.Type.DOUBLE, line: this.line, column: this.column };
        else if (this.type == Type_1.Type.STRING)
            return { value: this.value, type: Type_1.Type.STRING, line: this.line, column: this.column };
        else if (this.type == Type_1.Type.BOOLEAN)
            return { value: this.booleanType(this.value), type: Type_1.Type.BOOLEAN, line: this.line, column: this.column };
        else if (this.type == Type_1.Type.CHAR)
            return { value: this.value, type: Type_1.Type.CHAR, line: this.line, column: this.column };
        else if (this.type == Type_1.Type.ID)
            return { value: this.value, type: Type_1.Type.ID, line: this.line, column: this.column };
        else
            return { value: this.value, type: Type_1.Type.error, line: this.line, column: this.column };
    }
    booleanType(value) {
        if (this.value.toLocaleLowerCase() == "true")
            return Boolean(true);
        else
            return Boolean(false);
    }
}
exports.Literal = Literal;
