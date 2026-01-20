let spanNumber = document.getElementsByClassName("numberclass")

let inputNumber = document.getElementById("number")

let buttonEl = document.getElementById("convert-btn")

let metersFeet = document.getElementById("meterstofeet")

let feetMeters = document.getElementById("feettometers")

let literGallons = document.getElementById("literstogallons")

let gallonLiters = document.getElementById("gallonstoliters")

let kiloPounds = document.getElementById("kilostopounds")

let poundsKilos = document.getElementById("poundstokilos")



buttonEl.addEventListener("click", function(){

    let valueTxt = inputNumber.value
    for(let i = 0 ; i < spanNumber.length ; i++){
        spanNumber[i].textContent =  valueTxt
    }

    metersFeet.textContent = (valueTxt * 3.28084).toFixed(2)
    feetMeters.textContent = (valueTxt * 0.3048).toFixed(2)
    literGallons.textContent = (valueTxt * 0.26417).toFixed(2)
    gallonLiters.textContent = (valueTxt * 3.78541).toFixed(2)
    kiloPounds.textContent = (valueTxt * 2.20462).toFixed(2)
    poundsKilos.textContent = (valueTxt * 0.453592).toFixed(2)
} )



