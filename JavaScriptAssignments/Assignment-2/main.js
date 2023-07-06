
let p3= document.all[11];
p3.addEventListener("click",function(){
    
p3.innerText ="3rd Paragraph";
});
document.getElementById('p1').style = 'background-color:pink;'

let IMG = document.getElementsByTagName('img')[0];
IMG.addEventListener("mouseover",mover);
function mover(){
        document.getElementById("imgId").innerHTML = "Moused over!<br>"
};
IMG.addEventListener("mouseout", mout)
function mout(){
    document.getElementById("imgId").innerHTML = "Moused out!<br>"
};
let p2 = document.getElementsByClassName('p2')[0];
p2.setAttribute("style","color:red;");