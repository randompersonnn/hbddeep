var slider = document.getElementById("range");
var output = document.getElementById("ptag");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
//   let x = 1 -   this.value/100 
  document.getElementById("layer").style.opacity = 1 - this.value/100

  if(this.value == 100){
      document.getElementById("layer").style.display = "none"
  }
}

