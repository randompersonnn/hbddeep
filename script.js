var slider1 = document.getElementById("r1");
var slider2 = document.getElementById("r2");
var slider3 = document.getElementById("r3");

var layer1 = document.getElementById("l1");
var layer2 = document.getElementById("l2");
var layer3 = document.getElementById("l3");
var output = document.getElementById("ptag");
// output.innerHTML = slider1.value;

slider1.oninput = function() {
  // output.innerHTML = this.value;
  layer1.style.opacity = 1 - this.value/100
  if(this.value > 95){
      layer1.style.display = "none"
      setslide()
  }
}

slider2.oninput = function() {
  // layer2.style.opacity = Math.abs(this.value/50)
  // hidedisplay(layer2)
  if(this.value > 95){
      layer2.style.display = "none"
      setslide()

    }
    if(this.value < 5){
      // layer2.style.display = "none"
      layer1.style.display = ""
      setslide()

  }
}

slider3.oninput = function() {
  layer2.style.opacity = Math.abs(this.value/50)
  hidedisplay(layer2)
  if(this.value > 95){
      
      
    }
    if(this.value < 5){
    
  }
}



function hidedisplay(s){
    var num = parseInt(s.slice(1))
    for(i = 0; i<=10; i++){
      
    }

}

function setslide() {
    slider1.value = "0";
    slider2.value = "50";
    slider3.value = "50";
}




























































































// slider1.oninput = function() {
//   output.innerHTML = this.value;
// //   let x = 1 -   this.value/100 
//   layer1.style.opacity = 1 - this.value/100

//   if(this.value == 100){
//       // layer1.style.display = "none"
//   }
// }

// slider2.oninput = function() {
//   // output.innerHTML = this.value;
// //   let x = 1 -   this.value/100 
//   // layer2.style.opacity = Math.abs(this.value/50)
//   hidedisplay(layer2)
//   if(this.value > 95){
//       // document.getElementById("l2").style.display = "none"
//       // hid
//       hidedisplay(layer2)
//     }
//     if(this.value < 5){
//     // document.getElementById("l1").style.display = ""
//   }
// }

// slider3.oninput = function() {
//   // output.innerHTML = this.value;
// //   let x = 1 -   this.value/100 
//   // layer2.style.opacity = Math.abs(this.value/50)
//   hidedisplay(layer2)
//   if(this.value > 95){
//       // document.getElementById("l2").style.display = "none"
//       // hid
//       hidedisplay(layer2)
//     }
//     if(this.value < 5){
//     // document.getElementById("l1").style.display = ""
//   }
// }