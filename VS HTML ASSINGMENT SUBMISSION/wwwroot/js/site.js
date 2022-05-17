// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var id = null;
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 150;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 800) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
        }
    }
}