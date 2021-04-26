function myrangeFunction() {
    let x = document.getElementById("range").value;
    //   document.getElementById("demo").innerHTML = x;
      console.log(x)
    let y = x/100
    document.getElementById("layer").style.opacity = y
  }