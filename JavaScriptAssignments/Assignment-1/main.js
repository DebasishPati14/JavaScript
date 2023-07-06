function changeText(id) {
    id.innerText = "Ooops!";
  }

  function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

  function focous(){
    document.getElementById("lname").setAttribute("style","background-color:rgb(171, 246, 245);")
  }

  function mOver(obj) {
    obj.innerHTML = "Oops! didn't you notice<br>Your mouse just got out from this element Out";
  }
  
  function mOut(obj) {
    obj.innerHTML = "Oops! didn't you notice<br>Your mouse just came over  this element";
  }

  function double(){
    document.getElementById('dbl').setAttribute("style","background-color:pink;");
    
  }