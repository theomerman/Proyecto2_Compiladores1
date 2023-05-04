
# Manual Técnico

El manual técnico muestra en detalle la implementacion de cada uno de los métodos más importantes en este programa. Empezamos explicando la implementación del árbol n-ario:


### El uso de TypeScript
Para la realización de este proyecto se utilizó el lenguaje JavaScript pero se escribió en TypeScript ya que es un lenguaje de programación que se basa en JavaScript, pero con la adición de características de tipado estático. Es decir, permite definir tipos de datos para las variables, argumentos y funciones, lo que puede ayudar a detectar errores en tiempo de compilación.

## Metodos y Funciones

Empezamos con la clase Assignment tiene cuatro propiedades: type, id, value, line, y column. type representa el tipo de la variable que se va a asignar. id es el identificador de la variable que se va a asignar. value es la expresión que se va a asignar a la variable. line y column representan la línea y columna en la que se encuentra la instrucción en el código fuente.

```typescript
export class Assignment extends Instruction{

    constructor(public type: Type, public id: string, public value: Expression, line: number, column: number){
        super(line, column);
    }
    
    public execute(env: Enviroment) {
        let value = this.value.execute(env);

        if(env.tablaSimbolos.has(this.id))
            return { value: `La variable ${this.id} ya existe en este ambito`, type: Type.error, line: this.line, column: this.column };

        if(this.type == value.type){
            env.addSymbol(this.id, new Symbol(this.id, value.value, value.type, this.line, this.column));
        }
        
    }
}
```
### Enviroment o Ambito
La clase Environment es una clase que representa un entorno de ejecución para un programa. Este entorno contiene dos tablas de símbolos: una tabla de símbolos para variables y otra tabla de símbolos para métodos. La clase también tiene una propiedad anterior que hace referencia al entorno anterior en la jerarquía de entornos.

El constructor de la clase toma como argumentos el entorno anterior y un identificador que se usa para distinguir el entorno actual. Al crearse un nuevo entorno, se crea una nueva instancia de las tablas de símbolos y se asigna el entorno anterior.

La clase Environment tiene varios métodos para trabajar con las tablas de símbolos. El método addSymbol se usa para agregar un nuevo símbolo (variable) a la tabla de símbolos actual. El método comprueba si la tabla de símbolos ya tiene un símbolo con la misma clave (nombre de la variable). Si no lo tiene, el símbolo se agrega a la tabla de símbolos actual. De lo contrario, se muestra un mensaje de error y se detiene la ejecución.
```typescript
export class Enviroment{
    public tablaSimbolos: Map<string, Symbol>;
    public tablaMetodos: Map<string, Method>;
    public anterior: Enviroment | null;
    constructor(anterior: Enviroment | null, actual: string){
        this.tablaSimbolos = new Map<string, Symbol>();
        this.tablaMetodos = new Map<string, Method>();
        this.anterior = anterior;
    }

    public addSymbol(_clave: string, _valor: Symbol){ //agregar simbolo
        if(!this.tablaSimbolos.has(_clave)){
            this.tablaSimbolos.set(_clave, _valor);

        }else{
            console.log("Error Semantico: La variable '" + _clave + "' ya existe en el ambito actual");
            alert("Error Semantico: La variable '" + _clave + "' ya existe en el ambito actual");
        }
    }  

    public getSymbol(_clave: string){  //retornar simbolo
        let tmp: Enviroment | null = this;
        while(tmp != null){
            if(tmp.tablaSimbolos.has(_clave)){
                return tmp.tablaSimbolos.get(_clave);
            }
            tmp = tmp.anterior;
        }
        return null;
    }

    public updateSymbol(_clave:string, symbol: Symbol){
        let tmp: Enviroment | null = this;
        while(tmp != null){
            if(tmp.tablaSimbolos.has(_clave)){
                tmp.tablaSimbolos.set(_clave, symbol);
                return true;
            }
            tmp = tmp.anterior;
        }
        return false;
    }

    public addMethod(_clave: string, _valor: Method){ //agregar simbolo
        if(!this.tablaMetodos.has(_clave)){
            this.tablaMetodos.set(_clave, _valor);

        }else{
            console.log("Error Semantico: El metodo '" + _clave + "' ya existe en el ambito actual");
            alert("Error Semantico: El metodo '" + _clave + "' ya existe en el ambito actual");
        }
    }

    public getMethod(_clave: string){  //retornar simbolo
        let tmp: Enviroment | null = this;
        while(tmp != null){
            if(tmp.tablaMetodos.has(_clave)){
                return tmp.tablaSimbolos.get(_clave);
            }
            tmp = tmp.anterior;
        }
        return null;
    }
}
```
El método getSymbol se usa para buscar un símbolo en las tablas de símbolos en la jerarquía de entornos. Comenzando desde el entorno actual, se busca el símbolo en cada entorno hasta que se encuentra. Si el símbolo no se encuentra en ninguna de las tablas de símbolos, se devuelve null.

El método updateSymbol se utiliza para actualizar un símbolo en la tabla de símbolos actual o en cualquier entorno anterior en la jerarquía de entornos.

Los métodos addMethod y getMethod funcionan de manera similar a addSymbol y getSymbol, pero se utilizan para trabajar con la tabla de símbolos de métodos en lugar de la tabla de símbolos de variables.

### Symbol
La clase Symbol es utilizada para representar un símbolo dentro del lenguaje de programación, que puede ser una variable, una constante, una función, un procedimiento, entre otros.

El constructor de la clase Symbol recibe cinco parámetros:

`_id`: Es el identificador del símbolo, que puede ser una cadena de caracteres.\
`_valor`: Es el valor asociado al símbolo. Puede ser cualquier tipo de dato válido en el lenguaje de programación.\
`_tipo`: Es el tipo de dato del símbolo, representado por un valor de la enumeración Type, que es importada desde el archivo Enums/Type.\
`_linea`: Es el número de línea donde se encuentra el símbolo en el código fuente.\
`_columna`: Es el número de columna donde se encuentra el símbolo en el código fuente.\
La clase Symbol es utilizada en conjunto con la clase Enviroment para almacenar y manejar la información de los símbolos dentro del programa.

```typescript
export class Symbol{
    id : string;
    value : any;
    type : Type;
    line : number;
    column : number;

    constructor(_id: string, _valor: any, _tipo: Type, _linea: number, _columna: number){
        this.id = _id;
        this.value = _valor;
        this.type = _tipo;
        this.line = _linea;
        this.column = _columna;
    }
}
```
### Instruction
La clase abstracta `Instruction` representa una instrucción del lenguaje de programación que puede ser ejecutada. Esta clase sirve como base para todas las clases de instrucciones que se implementen en el programa.

El constructor de la clase Instruction recibe dos parámetros:

`line`: El número de línea donde se encuentra la instrucción en el código fuente.
`column`: El número de columna donde se encuentra la instrucción en el código fuente.

La clase `Instruction` define un método abstracto `execute(env: Enviroment)`: any, que debe ser implementado por todas las clases que hereden de esta clase. El método execute recibe como parámetro un objeto `env` de tipo `Enviroment`, que representa el ambiente donde se ejecuta la instrucción.

La clase `Instruction` es abstracta, lo que significa que no se puede crear una instancia directamente de esta clase. En su lugar, se deben crear clases hijas que hereden de `Instruction` e implementen el método `execute`.
```typescript
import { Enviroment } from "../Ambito/Enviroment";

export abstract class Instruction{
    constructor(public line: number, public column: number){
        this.line = line;
        this.column = column + 1;
    }
    public abstract execute(env: Enviroment): any;
}
```
La clase Expression es una clase abstracta que proporciona una estructura base para las expresiones que se pueden evaluar en el lenguaje de programación.

La clase tiene dos atributos, line y column, que se utilizan para almacenar la posición de la expresión en el código fuente, lo que puede ser útil para mostrar mensajes de error más precisos. Además, tiene un constructor que inicializa los atributos de línea y columna con los valores proporcionados.

La clase también tiene un método abstracto execute que toma un objeto Enviroment como parámetro y devuelve cualquier valor. Cada subclase de Expression debe proporcionar su propia implementación para el método execute, que define cómo se evalúa la expresión en el contexto del entorno proporcionado.

Dado que Expression es una clase abstracta, no se puede crear una instancia directamente de ella. En cambio, se utilizan subclases de Expression para crear objetos que representen expresiones específicas en el lenguaje de programación.


```typescript
import { Enviroment } from "../Ambito/Enviroment";

export abstract class Expression {
    line: number;
    column: number;
    constructor(line: number, column: number) {
        this.line = line;
        this.column = column + 1;
    }
    public abstract execute(enviroment: Enviroment): any;
}
```
Esta es una enumeración llamada Operator que enumera varios operadores. En TypeScript, una enumeración es un tipo de dato que consta de un conjunto de constantes numéricas o literales, a las que se puede acceder de forma sencilla. Cada uno de los elementos de esta enumeración representa un operador aritmético, lógico o relacional, junto con los operadores de incremento, decremento y unario negativo.

Aquí está la lista completa de los elementos en esta enumeración:

`SUMA`: El operador de suma (+).\
`RESTA`: El operador de resta (-).\
`MULTIPLICACION`: El operador de multiplicación (*).\
`DIVISION`: El operador de división (/).\
`POTENCIA`: El operador de potencia (**).\
`MODULO`: El operador módulo (%).\
`TERNARIO`: El operador ternario (?:).\
`MAYOR`: El operador mayor que (>).\
`MENOR`: El operador menor que (<).\
`MAYORIGUAL`: El operador mayor o igual que (>=).\
`MENORIGUAL`: El operador menor o igual que (<=).\
`COMPARACION`: El operador de igualdad (==).\
`DIFERENTE`: El operador de desigualdad (!=).\
`OR`: El operador lógico OR (||).\
`AND`: El operador lógico AND (&&).\
`NOT`: El operador lógico NOT (!).\
`INCREMENTO`: El operador de incremento (++).\
`DECREMENTO`: El operador de decremento (--).\
`UNARIO_MENOS`: El operador unario negativo (-).\

```typescript
export enum Operator{
    SUMA,
    RESTA,
    MULTIPLICACION,
    DIVISION,
    POTENCIA,
    MODULO,
    TERNARIO,
    MAYOR,
    MENOR,
    MAYORIGUAL,
    MENORIGUAL,
    COMPARACION,
    DIFERENTE,
    OR,
    AND,
    NOT,
    INCREMENTO,
    DECREMENTO,
    UNARIO_MENOS,
}
```
### Clase Method:

La clase Method representa un método en un programa. Un método es una colección de instrucciones que pueden ser ejecutadas en conjunto, y se pueden llamar desde otras partes del programa. Además, un método puede tener parámetros que se utilizan como entrada al método.

### Atributos:

`id`: identificador del método.\
`lista_parametro`: lista de parámetros del método.\
`instrucciones`: lista de instrucciones que conforman el cuerpo del método.\
`linea`: número de línea donde se encuentra definido el método.\
`columna`: número de columna donde se encuentra definido el método.
### Métodos:

`constructor(_id: string, _lista_parametro: [], _instrucciones: [], _linea: number, _columna: number)`: constructor de la clase Method. Recibe como parámetros el identificador del método, la lista de parámetros, la lista de instrucciones, el número de línea y el número de columna donde se encuentra definido el método.

```typescript
export class Method{
    id: string;
    lista_parametro: [];
    instrucciones: [];
    linea: number;
    columna: number;

    constructor(_id: string, _lista_parametro: [], _instrucciones: [], _linea: number, _columna: number){
        this.id = _id;
        this.lista_parametro = _lista_parametro;
        this.instrucciones = _instrucciones;
        this.linea = _linea;
        this.columna = _columna;
    }
}

```
