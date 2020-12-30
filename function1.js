

// FUNCTION EXPRESSION
// to declare a function in a varible


document.write("<h1> FUNCTION EXPRESSION.</h1>");

var a = function show (){

    document.write("THIS IS THE FUNCTION EXPRESSION.");
};

a();

// ANONYMOUS FUNCTION

document.write("<h1>ANONYMOUS FUNCTION</h1>");   


var b = function (){

    document.write("THIS IS THE ANONYMOUS FUNCTION.");
};
b();

// Passing Anonymous Function as a Argument

document.write("<h2>PASSING ANONYMOUS FUNCTION AS A ARGUMENTS.</h2>")


function disp( myFun){
    return myFun;
};


document.write(disp("javascript<br><br>"));

function show(first){
    return first;
};
document.write(show( function() {
        document.write("JAVASCRIPT<br><br>")
}));

// another way to define anonymous function as a arguments.

// document.write(disp("javascript<br><br>"));

function second(fun){
    return fun();
};
document.write(second ( function() {
        return "JAVASCRIPT <br><br>"
}));




