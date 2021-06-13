var rectangle = require('./rectangle')

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l +"m" + ", and b = " + b + "m");

    rectangle(l,b, (err, rect) => {
        if(err){
            console.log("ERROR: ", err.message);
        }
        else{
            console.log("The area of the rectangle of dimensions for the length 'l' = " + l + " and width 'b' = " + b 
            + " is " + rect.area() +"m²"),
            console.log("The perimeter of the rectangle of dimensions for the length 'l' = " + l + " and width 'b' = " + b 
            + " is " + rect.perimeter() +"m");

        }
    });
    console.log("This statement is after the call to rectangle()." + "\n")
}


// input example
solveRect(10,5);
solveRect(20,15);
solveRect(30,20);
solveRect(15,0);