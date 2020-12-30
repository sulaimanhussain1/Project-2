

// argument object practice 

document.write("<h1>ARGUMENT OBJECT.</h1>")

function display(name)

{
    arguments[0] = "ADVANCE JAVASCRIPT<br>"
    document.write(name);
    document.write(arguments[0]);

}
display("JAVASCRIPT<br><br>")

// lenght property

document.write("<h2>lenght property</h2>");

function para(name,num,phone)
{
    document.write(name);
    document.write(num);
    document.write(phone);
    document.write(arguments.length + " <br> <br>");

}
para("SULAIMAN<br><br>" , "03126386868<br><br>" , "SUMSUNG<br><br>");

// another way to define argument 

function phone(name,num,phone)
{
    for (let i = 0; i < arguments.length; i++) {
         document.write(arguments[i] );   
  }    
    document.write(arguments.length + "<br><br>");
    document.write(arguments.callee + "<br><br>");

}
phone("SULAIMAN<br><br>" , "03126386868<br><br>" , "SUMSUNG<br><br>");


// too many function arguments 

document.write("TOO MANY FUNCTION ARGUMENS<br><br>");

function disp(num1, num2){
    document.write("A = " + num1 + "<br><br>" + "B = " + num2 + "<br><br>" + "C = " + arguments[2] + " <br><br>" + "D = " + arguments[3]);
}
disp(10,30,50,70);