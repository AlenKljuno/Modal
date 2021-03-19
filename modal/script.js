
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");



var dugme2 = document.getElementsByClassName('ugasi2')[0];
dugme2.onclick = function(){
    modal.style.display = 'none'
}

var dugme = document.getElementsByClassName('ugasi')[0];
dugme.onclick = function(){
    modal.style.display = 'none'
}
btn.onclick = function() {
  modal.style.display = "block";
}





