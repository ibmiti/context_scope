// context vs scope
// ::::::::::::::::::::::::::::::::::::::: // 

// context
// context tells us where we are in the object
console.log(this === window);
// if in console output will be true , console is object

// if in console we run
function a(){
    console.log(this);
} // out put will be the object it is defined withinarr 

const obj = {
    a: function() {
        console.log(this);
    }
} // output will be obj{a:f} as the context of this refers to its obj

// scope
// a is defined within outer scope or global scope
let a = 1;
function b(){
    // within this functions closure 'a' is defined within the inner / function scope
    let a = 2;
}


