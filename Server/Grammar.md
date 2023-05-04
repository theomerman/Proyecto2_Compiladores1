```jison
<INI> ::= <LINS> EOF
         | error EOF

<LINS> ::= <LINS> <INS>
          | <INS>

<INS> ::= Rprint PARIZQ <Exp> PARDER PTCOMA
         | <DECLARAR> PTCOMA
         | <ASIGNAR> PTCOMA
         | <IF>
         | DOWHILE PTCOMA
         | <WHILE>
         | <FOR>
         | <SWITCH>
         | Rbreak PTCOMA
         | Rcontinue PTCOMA
         | <FUNCIONES>
         | <LLAMADA> PTCOMA
         | <RETORNO>
         | error INS

<RETORNO> ::= Rretorno <Exp> PTCOMA
              | Rretorno PTCOMA

<DECLARAR> ::= TIPO ID
              | TIPO ID IGUAL <Exp>
              | TIPO CORIZR CORDER ID IGUAL Rnew TIPO CORIZR <Exp> CORDER
              | TIPO CORIZR CORDER ID IGUAL LLAVEIZQ <L_EXP> LLAVEDER
              | Rlist MENOR TIPO MAYOR ID IGUAL Rnew Rlist MENOR TIPO MAYOR
              | TIPO error PTCOMA

<FUNCIONES> ::= TIPO ID PARIZQ PARDER BLOQUE
                | Rvoid ID PARIZQ PARDER BLOQUE
                | TIPO ID PARIZQ <PARAMETROS> PARDER BLOQUE
                | Rvoid ID PARIZQ <PARAMETROS> PARDER BLOQUE
                | TIPO ID PARIZQ error BLOQUE

<PARAMETROS> ::= <PARAMETROS> COMA TIPO ID
                 | TIPO ID

<ASIGNAR> ::= ID IGUAL <Exp>
              | ID INCRE
              | ID CORIZR <Exp> CORDER IGUAL <Exp>
              | ID PUNTO Radd PARIZQ <Exp> PARDER
              | ID CORIZR CORIZR <Exp> CORDER CORDER IGUAL <Exp>
              | ID error PTCOMA

<INCRE> ::= MAS MAS
            | MENOS MENOS

<TERNARIO> ::= <Exp> RTER <Exp> DPUNTOS <Exp>
               | <Exp> error PTCOMA

<IF> ::= Rif PARIZQ <Exp> PARDER BLOQUE
         | Rif PARIZQ <Exp> PARDER BLOQUE Relse BLOQUE
         | Rif error LLAVEDER

<SWITCH> ::= Rswitch PARIZQ <Exp> PARDER LLAVEIZQ <LCASOS> Rdefault DPUNTOS <LINS> LLAVEDER
             | Rswitch PARIZQ <Exp> PARDER LLAVEIZQ <LCASOS> LLAVEDER
             | Rswitch error LLAVEDER

<ELSEIF> ::= Rif PARIZQ <Exp> PARDER BLOQUE
             | <ELSEIF> Rif PARIZQ <Exp> PARDER BLOQUE
             | Rif error PARDER

<LCASOS> ::= Rcase <Exp> DPUNTOS <LINS>
            | <LCASOS> Rcase <Exp> DPUNTOS <LINS>
            | Rcase error PARDER

<DOWHILE> ::= Rdo <BLOQUE> Rwhile PARIZQ <Exp> PARDER
              | Rdo error PTCOMA

<WHILE> ::= Rwhile PARIZQ <Exp> PARDER <BLOQUE>
             | Rwhile error PARDER

<BLOQUE> ::= LLAVEIZQ <LINS> LLAVEDER
             | LLAVEIZQ LLAVEDER
             | LLAVEDER error LLAVEDER

<FOR> ::= Rfor PARIZQ <ASIGNAR> PTCOMA <Exp> PTCOMA <ACTUALIZAR> PARDER <BLOQUE>
           | Rfor PARIZQ <DECLARAR> PTCOMA <Exp> PTCOMA <ACTUALIZAR> PARDER <BLOQUE>
           | Rfor error LLAVEDER

<ACTUALIZAR> ::= ID IGUAL <Exp>
                 | ID INCRE
                 | ID error

<LLAMADA> ::= ID PARIZQ PARDER
               | ID PARIZQ <L_EXP> PARDER
               | Rmain ID PARIZQ PARDER
               | Rmain ID PARIZQ <L_EXP> PARDER

<CASTEO> ::= PARIZQ <TIPO2> PARDER <Exp>
              | PARIZQ error <Exp>

<TIPO2> ::= Rint
            | Rdouble
            | Rstring
            | Rchar

<TIPO> ::= Rint
            | Rdouble
            | Rstring
            | Rboolean
            | Rchar

<Exp> ::= <Exp> '+' <Exp>
        | <Exp> '-' <Exp>
        | <Exp> '*' <Exp>
        | <Exp> '/' <Exp>
        | <Exp> '^' <Exp>
        | <Exp> '%' <Exp>
        | <Exp> '<' <Exp>
        | <Exp> '>' <Exp>
        | <Exp> '!=' <Exp>
        | <Exp> '==' <Exp>
        | <Exp> '<=' <Exp>
        | <Exp> '>=' <Exp>
        | <Exp> '&&' <Exp>
        | <Exp> '||' <Exp>
        | <Exp> '++'
        | <Exp> '--'
        | '!' <Exp>
        | '-' <Exp>  UMENOS
        | ID
        | ID '(' ')'
        | ID '(' <L_EXP> ')'
        | ID '[' <Exp> ']'
        | ID '[' '[' <Exp> ']' ']'
        | Cadena
        | Char
        | NUMERO
        | DECIMAL
        | TRUE
        | FALSE
        | '(' <Exp> ')'
        | '(' TIPO2 ')' <Exp>  FCAST
        | RtoString '(' <Exp> ')' %prec FCAST
        | RtoLower '(' <Exp> ')'  FCAST
        | RtoUpper '(' <Exp> ')'  FCAST
        | Rtruncate '(' <Exp> ')'  FCAST
        | Rround '(' <Exp> ')'  FCAST
        | Rlength '(' <Exp> ')'  FCAST
        | Rtypeof '(' <Exp> ')'  FCAST
        ;

<L_EXP> ::= <L_EXP> ',' <Exp>
          | <Exp>
          ;
```