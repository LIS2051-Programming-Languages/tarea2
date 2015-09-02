//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
//147710-Joaquín de la Vega Hernandez
//Input Example
_INPUT = "4\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------

console.log(_INPUT);	//  Imprime el contenido de _INPUT
_INPUT = _INPUT.split("\n");
T= _INPUT.length-1;
console.log("Resultados");
i=0;	
while (i<T){

	range = _INPUT[i+1];
	rango = range.split(" ");
	j=0;
	
	if(1 <= rango[0] && rango[0] <= rango[1] && rango[1] <= 1000000000){

		for(k = rango[0]; k <= rango[1]; k++){

			num = Math.sqrt(k); // matha.sqrt() funcion para sacar raiz cuadrada
			num = num%1; // % operador module
			
			if(num==0){

				j = j+1;

			}

		} 
	console.log(j);
	}
	break;
}
