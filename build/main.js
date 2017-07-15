//This file is react-less... if we decide we are going to use react, I would delete this file.

var sampleData = [
    ["World History", "World History", "Defense Against the Dark Arts", "Nap Time"],
    ["Mathematics", "Intro to Programming", "Nap Time", "English"],
    ["French V", "Spanish V", "Latin V", "Binary 101"] //anyone get my binary "101" joke?
]
LoadData(sampleData);
function LoadData(data){
    console.log("LoadData called!");
    //data is a 2D array, with 1) periods and 2) days.
    //Depending on how data is stored, we may need to parse it to match this format.
    var out = $("#calDisplay");
    console.log(out.html()); //returns undefined... need to fix
    out.empty();
   
    for(var h = 0; h < data.length; h++){
        out.append("<th id=\"row-" + h + "\"><td>Period " + (h+1) + "</td>");
        period = $("#row-" + h);
        for(var d = 0; d < data[h].length; d++){
            
        }
        out.append("</th>")
    }

}