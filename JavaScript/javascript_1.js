function color_function() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color!";
    switch(colors) {
        case "Red":
            color_output = "Red" + color_string;
            break;
        case "Yellow":
            color_output = "Yellow" + color_string;
            break;
        case "Green":
            color_output = "Green" + color_string;
            break;
        case "Blue":
            color_output = "Blue" + color_string;
            break;
        case "Pink":
            color_output = "Pink" + color_string;
            break;
        case "Purple":
            color_output = "Purple" + color_string;
            break;
        default:
            color_output = "Please enter a color exactly as written on the above list.";
    }
    var a = document.getElementsByClassName("output");
    a[0].innerHTML = color_output;
}

function circleCanvas() {
var c = document.getElementById("id_name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
}

function grad() {
var a = document.getElementById("id_name2");
var atx = a.getContext("2d");

var grd = atx.createLinearGradient(0, 0, 175, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

atx.fillStyle = grd;
atx.fillRect(0, 0, 200, 100);
}

