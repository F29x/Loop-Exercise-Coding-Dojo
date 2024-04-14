function oddNum() {
    let result="";
    for (let index = 0; index <=20; index++) {
        if (index%2!==0) {
            result= result +index +'\n';  
        }
        
    }
    document.getElementById('text1').value = result;
}


function decreaseNum(){
    let result="";
    for (let index = 100; index >=0; index--) {
        if (index%3===0) {
            result= result +index +'\n'; 
            
        }
        
    }
    document.getElementById('text2').value = result;
 
}

function printSequence() {
    let value = 4;
    let result= "";

    for (let i = 0; i < 6; i++) {
        value -= 1.5;
        result = result + value + '\n';
    }
    document.getElementById('text3').value = result;
 
}

function sigma() {
    let sum =0;
    let result= "";
    for (let index = 0; index <=100; index++) {
        sum = sum+index;
        result= result + sum + '\n';
    }
    document.getElementById('text4').value = result;

}

function factorial() {
    let total=1;
    let result= "";
    for(index=1; index<=12; index++){
        total= total*index; 
        result = result + total + '\n';
    }
    document.getElementById('text5').value = result;

}