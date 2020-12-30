

// global scope 

document.write("<h1>GLOBAL AND LOCAL SCOPE </h1>")

var a = "THIS IS GLOBAL SCOPE <br>" ;
function  add(){
      document.write(a);
}
add();

// global scope 

document.write(a);

function sum () {
    document.write(a);
}
sum();

if (true ) {
    document.write(a);
};

// local scope . this is only used in function .. 

// local scope make the global scope . if wo don't use the var element 

function disp(){
    var i = " THIS IS LOCAL SCOPE<br>"
    document.write(i);
}
disp();

// this is error .because the local scope is not executed outer the function.

document.write (i);