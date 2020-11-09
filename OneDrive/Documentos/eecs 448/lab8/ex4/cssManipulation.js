function change()
{
    var someTag = document.getElementById("dummy");
    
    var rb = document.getElementById("redB").value;
    console.log(r)
    var gb = document.getElementById("greenB").value;
    var bb = document.getElementById("blueB").value;
    var widthb =  document.getElementById("widthB").value;
    var color = rb+gb+bb
   
    if (/[0-9A-F]{6}$/i.test(color)){  
        someTag.style.borderColor = "#" +color;
    }
    
        if (widthb !== ""){
            document.getElementById("dummy").style.borderWidth = widthb + "px ";
        }
        var r = document.getElementById("red").value;
        var g = document.getElementById("green").value;
        var b = document.getElementById("blue").value;
        var width =  document.getElementById("width").value;
        var color2 = r+g+b
        if (/[0-9A-F]{6}$/i.test(color2)){  
            someTag.style.backgroundColor = "#" +color2;
        }

            if (width !== ""){
                document.getElementById("dummy").style.borderWidth = width + "px ";
            }
}