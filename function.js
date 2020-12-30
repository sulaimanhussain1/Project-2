
//  Function 

document.write( "<h1> FUNCTIONS</h1><br>");

//creating a function 

function display() 
{
//     var a=prompt("Enter first value");
//     var b= prompt("Enter second value ");
//     c = a + b ;
//     document.write(c);
//

  document.write ("JAVASCRIPT\n\n<br><br>");
}

// calling a function 

display();
display();
display();
display();
display();


// function with parameters

function para (name1, name2 )
{
    document.write (name1 + " WITH " + name2)
}

para ( "FUNCTION" , "PARAMETERS<br><br>")

// function with missing argument 

document.write("function with missing argument ")

function add( a , b , c )
{
    document.write("<br><br>A :" + a + "<br><br> B : " + b + "<br><br> C : " + c);

} 

add( 60 , 80);
