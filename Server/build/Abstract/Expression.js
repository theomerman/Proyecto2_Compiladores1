"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expression = void 0;
class Expression {
    constructor(line, column) {
        this.line = line;
        this.column = column + 1;
    }
}
exports.Expression = Expression;
