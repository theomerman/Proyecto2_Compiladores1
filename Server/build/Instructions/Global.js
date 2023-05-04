"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
class Global {
    constructor(instructions, enviroment) {
        this.instructions = instructions;
        this.enviroment = enviroment;
        this.segundaPasada();
    }
    segundaPasada() {
        for (let i = 0; i < this.instructions.length; i++) {
            this.instructions[i].execute(this.enviroment);
        }
    }
}
exports.Global = Global;
