"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaration = void 0;
const Instruction_1 = require("../Abstract/Instruction");
const Symbol_1 = require("../Ambito/Symbol");
const Type_1 = require("../Enums/Type");
class Declaration extends Instruction_1.Instruction {
    constructor(type, id, value, line, column) {
        super(line, column);
        this.type = type;
        this.id = id;
        this.value = value;
    }
    execute(env) {
        let value = this.value.execute(env);
        if (env.tablaSimbolos.has(this.id))
            return { value: `La variable ${this.id} ya existe en este ambito`, type: Type_1.Type.error, line: this.line, column: this.column };
        if (this.type == value.type) {
            env.addSymbol(this.id, new Symbol_1.Symbol(this.id, value.value, value.type, this.line, this.column));
        }
    }
}
exports.Declaration = Declaration;
