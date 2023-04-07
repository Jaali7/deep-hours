document.getElementById("calc").onclick = function(){
    var h1 = parseInt(document.getElementById("hour1").value);
    var m1 = parseInt(document.getElementById("min1").value);
    var h2 = parseInt(document.getElementById("hour2").value);
    var m2 = parseInt(document.getElementById("min2").value);

    var output = document.getElementById("output");

    var htotal = h1 + h2;
    var mtotal = m1 + m2;
    
    if(mtotal >= 60){
        htotal += Math.floor(mtotal / 60);
        mtotal = mtotal % 60;
    }

    console.log("Total: " + htotal + "hr " + mtotal + "m"); // Debugging line
    output.textContent = "Total: " + htotal + "hr " + mtotal + "m";
    
    
}