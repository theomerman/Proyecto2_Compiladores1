"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instruction = void 0;
class Instruction {
    constructor(line, column) {
        this.line = line;
        this.column = column;
        this.line = line;
        this.column = column + 1;
    }
}
exports.Instruction = Instruction;
