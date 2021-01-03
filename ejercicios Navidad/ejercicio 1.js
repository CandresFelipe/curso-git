// returning the largest number
function largestNum(array){
   let num = array.sort((a,b)=> b-a)
   console.log(num.shift())
}
// largestNum([3,5,7,1,6])

// getting the point B to C
   /*  var matrix = new Array(10);
    for(i=0;i<=10;i++){
        matrix[i] = new Array(10);
        for(let j = 0; j <= 10; j++){
            matrix[i][j];
        }
    }

    let b = matrix[8][2];
    let c = matrix[4][8];
    var contador = 0;
    var arr = [];
    for(let i = 0; i <matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            arr = [8][2];
            if(b !== c){
                arr[i][j] = arr[i+1][j];
                arr[i][j] = arr[i][j+1];
                if(i > 4){
                    arr[i][j] = arr[i-1][j];
                }
                if(j > 2){
                    arr[i][j] = arr[i][j-1];
                }
                
            }
            contador = contador+1;
        }
    }

arr
console.log("B ha logrado llegar a C y le ha tomado "+contador+" pasos.");

   */


// Aditional exercises -----------------------------

/* var values1 = ['Apple', 1, false];
var values2 = ['Fries', 2,true];
var values3 = ['Mars', 9, 'Apple'];
    let values = values1.concat(values2,values3);
    values.filter((value,index)=>{
        if(values.indexOf(value) === index){
            return value;
        }
        console.log(value)
    } 
) */

// Algortihm excercise 3

var userData = [];
userData = prompt("ingrese los valores de los items: ").split(",");
if(userData !== Number){
    console.error("no es un valor valido");
    userData = prompt("ingrese los valores de los items: ")
}
userData.reduce((valor,menor)=>{
    var expensive = [];
    if(expensive.indexOf(valor) > menor){
        expensive = valor
    }
    return expensive;
})
