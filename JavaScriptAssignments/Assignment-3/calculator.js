console.log(getHistory())

function getHistory(){
    return document.getElementById("his-val").innerText;
}
function printHistory(num){
    document.getElementById("his-val").innerText =num;
}
function printOutput(num){
 document.getElementById("out-val").innerText=num;
}
function getOutput(){
 return document.getElementById("out-val").innerText;
}

// Adding eventListeners to all Opeators
var operator = document.getElementsByClassName("operator");

for(var i=0; i<operator.length;i++){
    operator[i].addEventListener('click',function () {
        if(this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        if(this.id == "backspace"){
           var out = getOutput().toString();
           if(out){
            out = out.substring(0,out.length-1);
            printOutput(out)
           }
        }

        else{
           var out = getOutput();
           var his = getHistory();
           if(out != ""){
            his = his + out;
            if(this.id == "="){
                var result = eval(his);
                if (!isFinite(result))
                { 
                    result = 0;
             }
                printOutput(result);
                printHistory("");
            }
            else{
                his = his + this.id;
                printHistory(his);
                printOutput("");
            }
           } 
        }
    })
}

// Adding eventListeners to all Numbers

var number = document.getElementsByClassName("number");

for(var i=0; i<number.length;i++){
    number[i].addEventListener('click',function () {
        var out = getOutput();
        if(out != NaN){
            out = out + this.id;
            printOutput(out);
        }
    })
}