var sliderImg = document.querySelector('.sliderImg');
var img = ['john.jpg', 'deepak.jpg', 'deba.jpg', 'rohit.jpg', 'kabir.jpg', 'shristi.jpg', 'gaurav.jpg', 'ashok.jpg', 'shalini.jpg', 'anjani.jpg', 'sai.jpg'];
var i = 0;
var rng = 11;
function getRange() {
    rng = document.getElementById('inp').value;
    i = 0;
    if (rng < 1 || rng > 11) {
        document.getElementById('wrongInput').innerHTML = "<h3 style='color: red;'>Sorry Wrong Input</h3>";
        rng = 1;
    }

}
function prev() {
    if (i <= 0) {
        i = rng;
    }
    fetch("/details.json")
        .then((response) => response.json()
        ).then(function (data) {
            console.log(data);
            var name = `${data[i].name}`;
            var id = `${data[i].id}`;
            var dept = `${data[i].department}`;
            var details = document.getElementById('details');
            details.innerHTML = "<b>" + name + "</b><br><b>" + id + "</b><br><b>" + dept + "</b>";
        }
        ).catch((error) => console.log("result not found")
        )
    i--;

    return setImg();

}
function next() {
    if (i >= rng - 1) {
        i = -1;
    }
    fetch("details.json")
        .then((response) => response.json()
        ).then(function (data) {
            console.log(data);
            var name = `${data[i].name}`;
            var id = `${data[i].id}`;
            var dept = `${data[i].department}`;
            var details = document.getElementById('details');
            details.innerHTML = "<b>" + name + "</b><br><b>" + id + "</b><br><b>" + dept + "</b>";
        }
        ).catch((error) => console.log("result not foiund")
        )
    i++;

    return setImg();
}

function setImg() {
    return sliderImg.setAttribute('src', 'images/' + img[i])
}