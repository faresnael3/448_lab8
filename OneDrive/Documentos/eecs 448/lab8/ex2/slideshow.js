var list = ["html.png","js.png","python.png","spotify.png","css.png"];
var index = 0;
function getnext()
{
    index = index+1;
    if(index == 5)
    {
        index =0;
    }
    document.getElementById("image").src = list[index];

}
function getprev()
{
    index = index-1;
    if(index ==-1)
    {
        index =4;
    }
    document.getElementById("image").src = list[index];

}