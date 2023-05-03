%{
    const { Literal } = require('../Expressions/Literal');
    const { Type } = require('../Enums/Type');
    const { Operations } = require('../Expressions/Operations');
    const { Operator } = require('../Enums/Operator');
    
%}
/* Definición Léxica */
%lex

%options case-insensitive
%x string

%%
/* Espacios en blanco */
"//".*            	{}
[ \r\t]+            {}
\n                  {}
(\/\/).*                             {} 
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]  {}

"print"		        return "Rprint";
"if"                return "Rif";
"else"              return "Relse"
"switch"            return "Rswitch";
"case"              return "Rcase"
"default"           return "Rdefault"
"int"               return "Rint";
"double"            return "Rdouble";
"boolean"           return "Rboolean";
"char"              return "Rchar";
"string"            return "Rstring";
"void"              return "Rvoid";
"return"            return "Rretorno";
"continue"          return "Rcontinue";
"toString"          return "RtoString";
"toLower"           return "RtoLower";
"toUpper"           return "RtoUpper";
"round"             return "Rround";
"truncate"          return "Rtruncate"
"while"             return "Rwhile";
"break"             return "Rbreak";
"for"               return "Rfor";
"new"               return "Rnew";
"list"              return "Rlist";
"add"               return "Radd";
"Main"              return "Rmain";
"length"            return "Rlength";
"typeof"            return "Rtypeof";
"do"                return "Rdo";
"toCharArray"       return "Rtochar"

"."                 return "PUNTO";
":"                 return 'DPUNTOS'
";"                 return 'PTCOMA';
","                 return 'COMA';
"("                 return 'PARIZQ';
")"                 return 'PARDER';
"["                 return 'CORIZR';
"]"                 return 'CORDER';
"{"                 return 'LLAVEIZQ';
"}"                 return "LLAVEDER";
"true"              return 'TRUE';
"false"             return 'FALSE';

">="                return 'MAYORI';
"<="                return 'MENORI';
"=="                return 'IGUALDAD';
"!="                return 'DIFERENTE';
"="                 return 'IGUAL';
"+"                 return 'MAS';
"-"                 return 'MENOS';
"*"                 return 'POR';
"/"                 return 'DIV';
"%"                 return 'MOD';
"^"                 return 'POT';
"?"                 return 'RTER';
">"                 return 'MAYOR';
"<"                 return 'MENOR';
"&&"                return 'AND';
"||"                return 'OR';
"!"                 return 'NOT';

[a-zA-Z][a-zA-Z0-9_]*   return 'ID';
[0-9]+("."[0-9]+)+\b    return 'DECIMAL';  
[0-9]+\b                return 'NUMERO';  
["]                             {cadena="";this.begin("string");}
<string>[^"\\]+                 {cadena+=yytext;}
<string>"\\\""                  {cadena+="\"";}
<string>"\\n"                   {cadena+="\n";}
<string>"\\t"                   {cadena+="\t";}
<string>"\\\\"                  {cadena+="\\";}
<string>"\\\'"                  {cadena+="\'";}
<string>["]                     {yytext=cadena; this.popState(); return 'Cadena';}

\'((\\\')|[^\n\'])*\'	{ yytext = yytext.substr(1,yyleng-2); return 'Char'; }
\`[^\n\`]*\`			{ yytext = yytext.substr(1,yyleng-2); return 'TEMPLATE'; }

<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

/* Asociación de operadores y precedencia */
%left JError
%left 'OR'
%left 'AND'
%right 'NOT'
%right 'FCAST'
%left 'IGUALDAD' 'DIFERENTE'
%left 'MENOR' 'MAYOR' 'MAYORI' 'MENORI'
%left 'MAS' 'MENOS' 
%left 'POR' 'DIV' 'MOD'
%left 'POT'
%left UMENOS

%start INI

%% /* Definición de la gramática */
//console.log(JSON.stringify($1,null,2));
INI
    : LINS EOF  //{imprimibles = [];errores = [];EntornoGlobal = Entorno(null);EjecutarBloque($1, EntornoGlobal); return {Entorno:EntornoGlobal, Imprimibles:imprimibles,Errores:errores,Arbol:JSON.stringify($1,null,2)}}
    | error EOF //{errores.push("Sintactico","Error en : '"+yytext+"'",this._$.first_line,this._$.first_column); console.log("Sintactico","Error en : '"+yytext+"'",this._$.first_line,this._$.first_column)}
;

LINS 
    : LINS INS   //{ $$=$1; $$.push($2) }
    | INS        //{ $$=[]; $$.push($1) }
;

INS 
    : Rprint PARIZQ Exp PARDER PTCOMA //{$$=Imprimir("print",$3);}
    | DECLARAR  PTCOMA                {$$ = $1}
    | ASIGNAR   PTCOMA                {$$ = $1}
    | IF                              {$$ = $1}
    | DOWHILE PTCOMA                  {$$ = $1}
    | WHILE                           {$$ = $1}
    | FOR                             {$$ = $1}
    | SWITCH                          {$$ = $1}
    | Rbreak PTCOMA                   //{$$ = Romper()}
    | Rcontinue PTCOMA                //{$$ = Continuar()}
    | FUNCIONES                       {$$ = $1}
    | LLAMADA  PTCOMA                 {$$ = $1}
    | RETORNO                         {$$ = $1}
	| error INS //{errores.push("Se recupero en ",yytext," (",this._$.last_line,",",this._$.last_column,")"); console.log("Sintactico","Error en : '"+yytext+"'",this._$.first_line,this._$.first_column);console.log("Se recupero en ",yytext," (",this._$.last_line,",",this._$.last_column,")");}
;

RETORNO   
    : Rretorno Exp PTCOMA    //{ $$ = Retorno($2); }
    | Rretorno PTCOMA        //{ $$ = Retorno(Simbolo("@Vacio@","void")); }
;

DECLARAR
    : TIPO ID                                                       //{$$ = Crear($2,$1,null,null,null)}
    | TIPO ID IGUAL Exp                                             //{$$ = Crear($2,$1,null,null,$4)}
    | TIPO CORIZR CORDER ID IGUAL Rnew TIPO CORIZR Exp CORDER       //{$$ = Crear($4,$1,$7,$9,null)} 
    | TIPO CORIZR CORDER ID IGUAL LLAVEIZQ L_EXP LLAVEDER           //{$$ = Crear($4,$1,$1,null,$7)}
    | Rlist MENOR TIPO MAYOR ID IGUAL Rnew Rlist MENOR TIPO MAYOR   //{$$ = Crear($5,$3,$10,null,null)}
    | TIPO error PTCOMA                                             {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")")}
;

FUNCIONES
    : TIPO ID PARIZQ PARDER BLOQUE                  //{ $$ = Funcion($2,[],$1,$5); }
    | Rvoid ID PARIZQ PARDER BLOQUE                 //{ $$ = Funcion($2,[],"void",$5); }
    | TIPO ID PARIZQ PARAMETROS PARDER BLOQUE       //{ $$ = Funcion($2,$4,$1,$6); }
    | Rvoid ID PARIZQ PARAMETROS PARDER BLOQUE      //{ $$ = Funcion($2,$4,"void",$6); }
    | TIPO ID PARIZQ error BLOQUE                   {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;
PARAMETROS
    : PARAMETROS COMA TIPO ID   //{ $$=$1;$$.push(Crear($4,$3,null,null)) }
    | TIPO ID                   //{ $$=[];$$.push(Crear($2,$1,null,null)) }
;

ASIGNAR
    : ID IGUAL Exp                                      //{$$ = Asignar($1,$3,null)}
    | ID INCRE                                          //{$$ = Asignar($1,NuevaOperacion(nuevoSimbolo($1,"ID"),nuevoSimbolo(parseFloat(1),"numero"),$2),null)}
    | ID CORIZR Exp CORDER IGUAL Exp                    //{$$ = Asignar($1,$6,$3)}  
    | ID PUNTO Radd PARIZQ Exp PARDER                   //{$$ = Asignar($1,$5,nuevoSimbolo("","lista"))} 
    | ID CORIZR CORIZR Exp CORDER CORDER IGUAL Exp      //{$$ = Asignar($1,$8,NuevaOperacion($4,nuevoSimbolo(parseFloat(1),"numero"),"+"))}
    | ID error PTCOMA                                   {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")")}
;

INCRE
    : MAS MAS   {$$= $1}
    | MENOS MENOS {$$=$1}
;

TERNARIO
    : Exp RTER Exp DPUNTOS Exp                  //{$$ = Ternario($1,$3,$5)} 
    | Exp error PTCOMA                        {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

IF
    : Rif PARIZQ Exp PARDER BLOQUE              //{$$ = Si($3,$5,null)}       //If(){}
    | Rif PARIZQ Exp PARDER BLOQUE Relse BLOQUE //{$$ = Si($3,$5,$7)}         //If(){}else{}
    //| Rif PARIZQ Exp PARDER BLOQUE Relse IF 
    | Rif error LLAVEDER                        {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

SWITCH
    : Rswitch PARIZQ Exp PARDER LLAVEIZQ LCASOS Rdefault DPUNTOS LINS LLAVEDER  //{$$ = Seleccionar($3,$6,$9)}
    | Rswitch PARIZQ Exp PARDER LLAVEIZQ LCASOS LLAVEDER                        //{$$ = Seleccionar($3,$6,null)}
    | Rswitch error LLAVEDER                                                    {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

ELSEIF
    : Rif PARIZQ Exp PARDER BLOQUE        //{$$=[];$$.push(ElseIf($3,$5))}
    | ELSEIF Rif PARIZQ Exp PARDER BLOQUE //{$$=$1;$$.push(ElseIf($4,$6))}
    | Rif error PARDER
;

LCASOS
    :Rcase Exp DPUNTOS LINS               //{$$=[];$$.push(Caso($2,$4));}
    |LCASOS Rcase Exp DPUNTOS LINS        //{$$=$1;$$.push(Caso($3,$5));}
    |Rcase error PARDER                   {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

DOWHILE
    :Rdo BLOQUE Rwhile PARIZQ Exp PARDER    //{$$ = HacerMientras($5,$2)}
    |Rdo error PTCOMA                       {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

WHILE
    :Rwhile PARIZQ Exp PARDER BLOQUE        //{$$ = new Mientras($3,$5);}
    |Rwhile error PARDER                    {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

BLOQUE
    : LLAVEIZQ LINS LLAVEDER    //{$$ = $2}
    | LLAVEIZQ LLAVEDER         //{$$ = []}
    | LLAVEDER error LLAVEDER   {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

FOR
    :Rfor PARIZQ ASIGNAR PTCOMA Exp PTCOMA ACTUALIZAR PARDER BLOQUE         //{$$ = Desde($3,$5,$7,$9)}
    |Rfor PARIZQ DECLARAR PTCOMA Exp PTCOMA ACTUALIZAR PARDER BLOQUE        //{$$ = Desde($3,$5,$7,$9)}
    |Rfor error LLAVEDER                                                    {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

ACTUALIZAR
    : ID IGUAL Exp         //{$$ = Actualizacion($1,$3)}
    | ID INCRE             //{$$ = Actualizacion($1,NuevaOperacion(nuevoSimbolo($1,"ID"),nuevoSimbolo(parseFloat(1),"numero"),$2))}
    | ID error              {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

LLAMADA 
    : ID PARIZQ PARDER                  //{ $$=Llamada($1,[]); }
    | ID PARIZQ L_EXP PARDER            //{ $$=Llamada($1,$3); }
    | Rmain ID PARIZQ PARDER            //{ $$=Llamada($2,[]); }
    | Rmain ID PARIZQ L_EXP PARDER      //{ $$=Llamada($2,$4); }
;

CASTEO
    : PARIZQ TIPO2 PARDER Exp       ////{$$ = Casteo({Expresion:$4,Tipo:$2}, "casteo") }
    | PARIZQ error Exp              {console.log("Se recupero en ",yytext," (", this._$.last_line,", ", this._$.last_column,")");}
;

TIPO2
    : Rint          {$$ = Type.INT}
    | Rdouble       {$$ = Type.DOUBLE}
    | Rstring       {$$ = Type.STRING}
    | Rchar         {$$ = Type.CHAR}
;

TIPO 
    : Rint          {$$ = Type.INT}
    | Rdouble       {$$ = Type.DOUBLE}
    | Rstring       {$$ = Type.STRING}
    | Rboolean      {$$ = Type.BOOLEAN}
    | Rchar         {$$ = Type.CHAR}
;
Exp 
    : Exp MAS Exp                                   { $$ = new Operations($1,$3, Operator.SUMA, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp MENOS Exp                                 { $$ = new Operations($1,$3, Operator.RESTA, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp POR Exp                                   { $$ = new Operations($1,$3, Operator.MULTIPLICACION, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp DIV Exp                                   { $$ = new Operations($1,$3, Operator.DIVISION, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp POT Exp                                   { $$ = new Operations($1,$3, Operator.POTENCIA, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp MOD Exp                                   { $$ = new Operations($1,$3, Operator.MODULO, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp MENOR Exp                                 { $$ = new Operations($1,$3, Operator.MENOR, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp MAYOR Exp                                 { $$ = new Operations($1,$3, Operator.MAYOR, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp DIFERENTE Exp                             { $$ = new Operations($1,$3, Operator.DIFERENTE, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp IGUALDAD Exp                              { $$ = new Operations($1,$3, Operator.COMPARACION, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp MAYORI Exp                                { $$ = new Operations($1,$3, Operator.MAYORIGUAL, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp MENORI Exp                                { $$ = new Operations($1,$3, Operator.MENORIGUAL, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp AND Exp                                   { $$ = new Operations($1,$3, Operator.AND, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp OR Exp                                    { $$ = new Operations($1,$3, Operator.OR, @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp MAS MAS                                   //{ $$ = new Operations($1,$3, Operator., @1.first_line, @1.first_column); console.log($$.execute());}
    | Exp MENOS MENOS                               //{ $$=NuevaOperacion($1,nuevoSimbolo(parseFloat(1),"numero"),"-")}
    | NOT Exp                                       { $$ = new Operations($2,null, Operator.NOT, @1.first_line, @1.first_column); console.log($$.execute());}
    | MENOS Exp %prec UMENOS                        { $$ = new Operations($2,null, Operator.UNARIO_MENOS, @1.first_line, @1.first_column); console.log($$.execute());}//{ $$=NuevaOperacionUnario($2,"umenos"); }
    | ID							                { $$ = new Literal($1, Type.ID, @1.first_line, @1.first_column); console.log($$.execute())}
    | ID PARIZQ PARDER                              //{ $$=nuevoSimbolo({Id:$1,Params:[]},"funcion"); }
    | ID PARIZQ L_EXP PARDER                        //{ $$=nuevoSimbolo({Id:$1,Params:$3},"funcion"); }
    | ID CORIZR Exp CORDER                          //{ $$=nuevoSimbolo({Id:$1,Params:$3},"vector")}
    | ID CORIZR CORIZR Exp CORDER CORDER            //{ $$=nuevoSimbolo({Id:$1,Params:$4},"lista")}
    | Cadena                                        { $$ = new Literal($1, Type.STRING, @1.first_line, @1.first_column); }
    | Char                                          { $$ = new Literal($1, Type.CHAR, @1.first_line, @1.first_column); console.log($$.execute()) }
    | NUMERO                                        { $$ = new Literal($1, Type.INT, @1.first_line, @1.first_column); console.log($$.execute()) }
    | DECIMAL                                       { $$ = new Literal($1, Type.DOUBLE, @1.first_line, @1.first_column); console.log($$.execute()) }
    | TRUE                                          { $$ = new Literal($1, Type.BOOLEAN, @1.first_line, @1.first_column); console.log($$.execute()) }
    | FALSE                                         { $$ = new Literal($1, Type.BOOLEAN, @1.first_line, @1.first_column); console.log($$.execute()) }
    | PARIZQ Exp PARDER                             { $$=$2}
    | PARIZQ TIPO2 PARDER Exp     %prec FCAST       //{ $$ = nuevoSimbolo({Id:$4,Tipo:$2}, "casteo") }
    | RtoString PARIZQ Exp PARDER %prec FCAST       //{ $$ = nuevoSimbolo({Id:$3,Tipo:"cadena"}, "casteo") }
    | RtoLower PARIZQ Exp PARDER  %prec FCAST       //{ $$ = nuevoSimbolo({Id:$3,Tipo:"lower"}, "casteo") }
    | RtoUpper PARIZQ Exp PARDER  %prec FCAST       //{ $$ = nuevoSimbolo({Id:$3,Tipo:"upper"}, "casteo") } 
    | Rtruncate PARIZQ Exp PARDER  %prec FCAST      //{ $$ = nuevoSimbolo({Id:$3,Tipo:"truncate"}, "casteo") }
    | Rround PARIZQ Exp PARDER  %prec FCAST         //{ $$ = nuevoSimbolo({Id:$3,Tipo:"round"}, "casteo") }
    | Rlength PARIZQ Exp PARDER %prec FCAST         //{ $$ = nuevoSimbolo({Id:$3,Tipo:"length"}, "casteo")}
    | Rtypeof PARIZQ Exp PARDER %prec FCAST         //{ $$ = nuevoSimbolo({Id:$3,Tipo:"typeof"}, "casteo")}
;

L_EXP 
    :L_EXP COMA Exp                 { $$=$1;$$.push($3); }
    |Exp                            { $$=[];$$.push($1); }
    ;