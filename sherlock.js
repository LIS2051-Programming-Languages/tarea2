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
 //console.log(_INPUT);	
INPUT = _INPUT.split("\n");

for(i=1;i< INPUT.length;i++)
{
	c=INPUT[i].split(' ');
	a= c[0];
	b= c[1];

	raices=0;
	 while (a<=b)
 {
 	if(a<0)
 	{
 		console.log("error");
 		break;
 	}
 	else
 	{
 		Raiz=Math.sqrt(a);
 		if(Raiz % 1!=0)
 		{
 			a++;
 		}else
 		{
 			
 			raices++;
 			a++;
 		}
 	}
 }
 console.log(raices);
} 
