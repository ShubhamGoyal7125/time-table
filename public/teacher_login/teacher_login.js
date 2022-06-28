const { status } = require("express/lib/response");

function checkbox() {
    var x = document.getElementById("password");
    if(x.type==="password")
    {
        x.type="text";
    }

    else
    {
        x.type="password";
    }
    
}

