const parse = require('./Gramatica/gramatica');

let entrada = `
//Este es el primer archivo de prueba
/*En este archivo se verifica el funcionamiento correcto del
ciclo while, asi como la sentencia if y else
*/

void metodo1(){
    //llamada del metodo
    figura1(10);
}
void figura1(int n) {
        String cadenaFigura = "";
        double i; 
        i=-3*n/2;
        //iniciando dibujo
        while(i<=n){
            cadenaFigura = "";
            double j; 
            j=-3*n/2;
            while(j<=3*n){
                double absolutoi;
                absolutoi = i;
                double absolutoj;
                absolutoj = j;
                if(i < 0)
                {
                    absolutoi = i * -1;
                } if(j < 0)
                {
                    absolutoj = j * -1;
                }
                if((absolutoi + absolutoj < n)
                        || ((-n / 2 - i) * (-n / 2 - i) + (n / 2 - j) * (n / 2 - j) <= n * n / 2)
                        || ((-n / 2 - i) * (-n / 2 - i) + (-n / 2 - j) * (-n / 2 - j) <= n * n / 2)) {
                    cadenaFigura = cadenaFigura + "* ";
                }
                else
                {
                    cadenaFigura = cadenaFigura + ". ";
                }
                j=j+1;
            }
            print(cadenaFigura);
            i=i+1;
        }
        print("Si la figura es un corazón, te aseguro que tendrás un 100 :3");
    }

// main metodo1();

/*
    este es un comentario multilinea
*/

/*
---------------------------SALIDA ESPERADA-----------------------
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . * * * . . . . . . . * * * . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . * * * * * * * . . . * * * * * * * . . . . . . . . . . . . . . . . . . . . . . 
. . . . . * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . . 
. . . . . * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . . 
. . . . * * * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . 
. . . . * * * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . 
. . . * * * * * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . 
. . . * * * * * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . 
. . . * * * * * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . 
. . . . * * * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . 
. . . . * * * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . 
. . . . . * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . . 
. . . . . * * * * * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . . 
. . . . . . . * * * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . * * * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . * * * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . * * * * * * * * * * * . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . * * * * * * * * * . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . * * * * * * * . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . * * * * * . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . * * * . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . * . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
Si la figura es un corazon, te aseguro que tendrás un 100 :3

*/



`

entrada = `
    int a = !(5+5);
    
    
`
parse.parse(entrada);