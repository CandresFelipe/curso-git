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
var marco= [0, 1, 2, 3];
var totalPeople = 15;
var marie = 2*tomas;
var tomas;
var init = 0;

for(let i = 0; marco.length>i; i++){

    init = marco[i]
    tomas = (totalPeople-init)/3

    if((totalPeople-init)%3===0){

        var marie = 2*tomas;

        console.log('Tomas atiende a ' + tomas + ', Maria atiende a ' + marie + ' y marco atiende a ' + marco[i])
    }
}