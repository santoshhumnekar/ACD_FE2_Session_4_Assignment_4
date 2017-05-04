//generic class with property name
console.log("Exam_First");
let GenericExample = (function() {
    function GenericExample() {}
    GenericExample.prototype.setName = function(arg) { // Generic class and different type objects. 
        this.arg = arg;
    };
    GenericExample.prototype.getName = function() {
        return this.arg;
    };
    return GenericExample;
}());
let g1 = new GenericExample();
g1.setName("Santy");
console.log(g1.getName());
let g2 = new GenericExample(); ////display message in console.
g2.setName(1786);
console.log(g2.getName());
console.log("===============================================================");
console.log("Exam_Second");
let User = (function() {
    function User() {}
    User.prototype.getName = function(arg) {
        return arg;
    };
    return User;
}());
let l = new User();
console.log(l.getName({ name: "Apex" }));