import { Enviroment } from "../Ambito/Enviroment";

export class Global{
    constructor(public instructions: Array<any>, public enviroment: Enviroment){
        this.segundaPasada();
    }
    public segundaPasada() {
        for(let i = 0; i < this.instructions.length; i++){
            this.instructions[i].execute(this.enviroment);
        }
    }
}