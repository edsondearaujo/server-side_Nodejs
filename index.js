var rectangle = require('./rectangle')

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l +"m" + ", and b = " + b + "m");
    if( l <= 0 || b <= 0){
        console.log("Rectangle dimensions should be greater than zero: l = " + l + ", and b = " + b)
    }
    else{
        console.log("The area of the rectangle is " + rectangle.area(l,b)+"m²");
        console.log("The perimeter of the rectangle is " + rectangle.perimeter(l,b)+"m"+"\n");
    }
}

// input example
solveRect(50,50);
solveRect(25,50);
solveRect(30,30);
solveRect(20,20);