function calc(){
    var a = parseInt(document.querySelector('#value1').value) // Get the value from the input with ID 'value1' and convert it to an integer
    var b = parseInt(document.querySelector('#value2').value)
    var op = parseInt(document.querySelector('#operator').value)
    var calculate;

    if(op == "add"){
        calculate = a + b;
    }else if (op == 'min'){
        calculate = a - b;
    }else if (op == 'div'){
        calculate = a / b;
    }else if (op == 'mul'){
        calculate = a * b;
    }


    console.log(calculate)
    
}