let feet    =document.getElementById("feet");
let meter   =document.getElementById("meter");
let inch    =document.getElementById("inches");
let cm      =document.getElementById("cm");
let yard    =document.getElementById("yards");
let km      =document.getElementById("km");
let mile    =document.getElementById("miles");
let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");


function feetToOther(val){
    meter.value =  val/3.2808; 
    inch.value =  val*12;   
    cm.value    =  val/0.032808; 
    yard.value  =  val*0.33333;  
    km.value    =  val/3280.8; 
    mile.value  =  val*0.00018939;       
}
function meterToOther(val){
    feet.value = val*3.2808;
    inch.value = val*39.370;  
    cm.value   = val/0.01;
    yard.value = val*1.0936; 
    km.value   = val/1000;
    mile.value = val*0.00062137;
}
function inchesToOther(val){
    feet.value = val*0.083333;
    meter.value = val/39.370;  
    cm.value = val/0.39370;
    yard.value = val*0.027778; 
    km.value = val/39370;
    mile.value = val*0.000015783;
}
function cmToOther(val){
    feet.value = val*0.032808;
    meter.value = val/100;  
    inch.value = val*0.39370;
    yard.value = val*0.010936; 
    km.value = val/100000 ;
    mile.value = val*0.0000062137;
}
function yardsToOther(val){
    feet.value = val*3;
    inch.value = val*36;  
    cm.value = val/0.010936;
    meter.value = val/1.0936; 
    km.value = val/1093.6;
    mile.value = val*0.00056818;
}
function kmToOther(val){
    feet.value = val*3280.8;
    inch.value = val*39370;  
    cm.value = val*100000;
    yard.value = val*1093.6; 
    meter.value = val*1000;
    mile.value = val*0.62137;
}
function milesToOther(val){
    feet.value = val*5280;
    inch.value = val*63360;  
    cm.value = val/0.0000062137;
    yard.value = val*1760; 
    km.value = val/0.62137;
    meter.value = val/0.00062137;

}
// *********************//
document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});

function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "feet" : feetToOther (parseFloat(value)); break;
        case "meter": meterToOther(parseFloat(value)); break;
        case "inch" : inchesToOther(parseFloat(value)); break;
        case "cm"   : cmToOther(parseFloat(value)); break;
        case "yard" : yardsToOther (parseFloat(value)); break;
        case "km"   : kmToOther (parseFloat(value)); break;
        case "mile" : milesToOther(parseFloat(value)); break;
    }
    

}
function celToFar() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel() {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
}
const fromSelected = document.getElementById("from-select");
const toSelected = document.getElementById("to-select");
const from = document.getElementById("from-input");
const to = document.getElementById("to-input");
const error = document.getElementById("error");

let fromNS = "Binary", toNS = "Binary";

fromSelected.addEventListener("change", function () {
   fromNS = fromSelected.options[fromSelected.selectedIndex].text;
   from.placeholder = fromNS + " Number";
});

toSelected.addEventListener("change", function () {
   toNS = toSelected.options[toSelected.selectedIndex].text;
   to.placeholder = toNS + " Number";
});

from.addEventListener("input", function () {
   error.style.display = "none";
});

let fromValue;
document.getElementById("convert-button").addEventListener("click", function () {
   switch (fromNS) {
      case "Binary":
         fromValue = from.value;
         if (/^[01]*$/.test(fromValue)) {
            switch (toNS) {
               case "Decimal": to.value = parseInt(fromValue, 2);
                  break;
               case "Hexadecimal": to.value = parseInt(fromValue, 2).toString(16).toUpperCase();
                  break;
               case "Octal": to.value = parseInt(fromValue, 2).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Decimal":
         fromValue = from.value;
         if (/^[0-9]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": to.value = Math.abs(fromValue).toString(2);
                  break;
               case "Hexadecimal": to.value = Math.abs(fromValue).toString(16).toUpperCase();
                  break;
               case "Octal": to.value = Math.abs(fromValue).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Hexadecimal":
         fromValue = from.value;
         if (/^[0-9a-fA-F]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": to.value = parseInt(fromValue, 16).toString(2);
                  break;
               case "Decimal": to.value = parseInt(fromValue, 16);
                  break;
               case "Octal": to.value = parseInt(fromValue, 16).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;

      case "Octal":
         fromValue = from.value;
         if (/^[0-7]*$/.test(fromValue)) {
            switch (toNS) {
               case "Binary": to.value = parseInt(fromValue, 8).toString(2);
                  break;
               case "Decimal": to.value = parseInt(fromValue, 8);
                  break;
               case "Hexadecimal": to.value = parseInt(fromValue, 8).toString(16).toUpperCase();
                  break;
               default: to.value = fromValue;
            }
         } else {
            error.style.display = "inherit";
            error.innerText = "Invalid " + fromNS + " Number";
            to.value = "";
         }
         break;
   }
});

