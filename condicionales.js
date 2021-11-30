let urlcarafeliz = "https://images.emojiterra.com/google/android-10/512px/1f60a.png"
let urlcaratriste = "https://cdn-0.emojis.wiki/emoji-pics/facebook/pensive-face-facebook.png"
let imgHtml = document.querySelector("#imagencara")
let nota1 = prompt("Ingrese su primera nota")
let nota2 = prompt("Ingrese su segunda nota")
let nota3 = prompt("Ingrese su tercera nota")
let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
alert("Su promedio es: "+ p)
if (p>="6"){
    imgHtml.scr = urlcarafeliz
}
else{
    imgHtml.src = urlcaratriste
}