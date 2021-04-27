var slider = document.getElementById("range");
var output = document.getElementById("ptag");
output.innerHTML = slider.value;

document.getElementById("range").oninput = function() {
  output.innerHTML = this.value;
//   let x = 1 -   this.value/100 
  document.getElementById("fstlayer").style.opacity = 1 - this.value/100

  if(this.value == 100){
      document.getElementById("fstlayer").style.display = "none"
  }
}

document.getElementById("secrange").oninput = function() {
  output.innerHTML = this.value;
//   let x = 1 -   this.value/100 
  document.getElementById("seclayer").style.opacity = 1 - this.value/100

  if(this.value == 100){
      document.getElementById("seclayer").style.display = "none"
  }
}

