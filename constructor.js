

// CONSTRUCTOR OBJECT..

document.write("<h1>CONSTRUCTOR WITH PARAMETERS</h1>");


function Mobile(model_no){
    this.model = model_no;
    this.price = function() {
        document.write( "Model No : " +  model_no + " <br>" + "PRICE : 7500<br><br>"); 
    }
};

var sumsung = new Mobile("Galaxy");
var motorola = new Mobile ("E4+");
var nokia = new Mobile (3310);

sumsung.price();
nokia.price();
motorola.price();
