
function mainFunction(x,y)
{
    function innerFunction(z) 
    {
        var w = 10;
        return  x+y+w+z;
    }


    console.log(innerFunction(3));

     return "Simple function Excution...";
}

//going from inner scope toouter scope called scope chaining

// if i declare var a as global variable and declare var a inside the functionm 
//so the scope of these variables are not the same and this is called shadowing


 var result =mainFunction(1,2);
 console.log(result);