alert("Hallo, semuanya. Saya Roby Andreansyah");

let nama = prompt("Kalo boleh tahu, siapa nama kamu?", "");
alert("Hallo " + nama + ", terimakasih telah mampir di websiteku")

function gantiWarna() {
    document.getElementById("h3_1").style.color = "red"
    document.getElementById("h3_2").style.color = "lightgreen"
    document.getElementById("h3_3").style.color = "blue"
}

function matiWarna() {
    document.getElementById("h3_1").style.color = "black"
    document.getElementById("h3_2").style.color = "black"
    document.getElementById("h3_3").style.color = "black"
}

 setInterval(() => gantiWarna(), 1000);
 setTimeout(() => matiWarna(), 2000);
 setInterval(() => gantiWarna(), 1000);
 setTimeout(() => matiWarna(), 2000);
 setInterval(() => gantiWarna(), 1000);
 setTimeout(() => matiWarna(), 2000);
 setInterval(() => gantiWarna(), 1000);
 setTimeout(() => matiWarna(), 2000);
 setInterval(() => gantiWarna(), 1000);
 setInterval(() => matiWarna(), 2000);

 
