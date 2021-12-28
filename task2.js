// write and examples for prototype inheritance


//each object that holds an another link is called prototype.
//java script has no implementation.
// java script has prototype based inheritance.



// EX:


var x = function (j) {
    this.i = 15;
    this. j = j;
}

x. prototype.getj = function(){
    return this.j;
};

var x1 = new x(20);
var x2 = new x(30);

console.log(x1.getj());