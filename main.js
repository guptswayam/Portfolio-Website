function dropdownclick()
{
    var x=document.getElementById("dropdownmenu");
    if(x.className==="navbar")
        x.className+="responsive";
    else
        x.className="navbar";
}