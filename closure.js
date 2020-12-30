

// closure 
/*

1-Global Scope
2-Outer Function Scope
3-Local Scope 

*/

document.write("<h1>CLOSURE.    </h1>");

function outerFun () {
  var i = " I is a outer function variable.";
  document.write(i + "<br>");

    function innerFun( ){
        var j = " J is a inner function variable. ";
        document.write( j + " <br> ");

        // outer function variable can  executed in a inner function . but the inner function variable can't executed in a outer function . so it is called closure .
        
        document.write(i + "<br>");
    }
    innerFun();
}
outerFun();