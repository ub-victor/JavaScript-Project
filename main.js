function calc(){
    var a = +(document.querySelector('#value1').value) // The '+' converts the input string to a number 
    var b = +(document.querySelector('#value2').value)
    var op = document.querySelector('#operator').value // Or use parseInt it help Get the selected operator from the dropdown for calculation
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


    document.querySelector('#result').innerHTML = calculate;
    
}