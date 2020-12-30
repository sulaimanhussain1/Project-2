

// factory function 
// mobile function 


document.write("<h1> MOBILE INFORMATION </h1>")

function mobile(model_no) {
            return {
                model : model_no,
                price : function () {
                    return "price=4000";
                }
            };
};

var sumsung = mobile ("galaxy");
var nokia = mobile (3310);
var motorola = mobile ("E4");
document.write(" SUMSUNG = " + " model : " + sumsung.model + " " + sumsung.price() +"<br><br>");
document.write(" MOTOROLA = " + " model : " +  motorola.model + " " + motorola.price() +"<br><br>");
document.write( " NOKIA  =" + " model : " + nokia.model + " " + nokia.price() +"<br><br>");